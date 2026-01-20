import {
  LOCALE_STATUS_EVENT,
  msg,
  type MsgOptions,
  type StrResult,
  type TemplateLike,
  type MsgFn,
  type TemplateMap,
} from "@lit/localize";
import { targetLocales } from "./generated/locale-codes";
import type { TemplateResult } from "lit-element/lit-element.js";
import { _installMsgImplementation } from "@lit/localize/init/install.js";
import { runtimeMsg } from "@lit/localize/internal/runtime-msg.js";

export type LocaleTemplates = { templates: TemplateMap };
export type LoaderFn = (locale: string) => Promise<LocaleTemplates>;

export type LoadLocaleEvent = CustomEvent<{ locales: string[]; module: string; loader: LoaderFn }>;

export const LOCALE_STORAGE_KEY = "@polyfea/user-locale";
export const REGISTER_LOCALE_EVENT = "register-locale-module";
const LOAD_LOCALES = "load-locales";

//** Helper function to dynamically localize messages with runtime only resolution (external translation)
// -  if id is empty then only input string/template is considered */
export const loc = (m: string | StrResult | TemplateResult | TemplateLike, id?: string) => {
  return id ? (msg as any)(m, { id }) : (msg as any)(m); // avoid typescript errors in lit-localize extract
};

/** Registers a locale module with its available locales and loader function. Assumes <polyfea-md-shell> or other
 * controller of LocalesLoaderRegistry is already instantiated and listening to the event
 *
 * @param module scoped module name (e.g. '@my-org/my-module')
 * @param locales array of locale codes that the loader can provide
 * @param loader function that loads the locale module dynamically
 */
export const registerLocaleModule = (module: string, locales: string[], loader: LoaderFn) => {
  const event = new CustomEvent<{
    locales: string[];
    module: string;
    loader: LoaderFn;
  }>(REGISTER_LOCALE_EVENT, {
    detail: { locales, module, loader },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(event);
};

/**
 * Sets the active locale by dispatching a 'theme-changed' event.
 *
 * @param locale - locale code to set
 */
export const setLocale = async (locale: string) => {
  if (locale) {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } else {
    localStorage.removeItem(LOCALE_STORAGE_KEY);
  }
  window.dispatchEvent(new CustomEvent(LOAD_LOCALES, { 
    detail: { locale }, 
    bubbles: true,
    composed: true, }));
};

/** Retrieves the active locale from local storage or sets it to browser preferred locale if not set */
export const loadLocale = (): string => {
  const locale = localStorage.getItem(LOCALE_STORAGE_KEY);  
  setLocale(locale || "");
  return locale || "";
}

export const getLocale = (): string => {
  const locale = localStorage.getItem(LOCALE_STORAGE_KEY);  
  return locale || "";
}

/** @internal */
export class LocalizationRegistry  {
  #loaders: Map<
    string,
    {
      locales: Set<string>;
      loader: LoaderFn;
    }
  > = new Map();
  #loadedTemplates: TemplateMap = {};
  #overrides: TemplateMap = {};
  #overridesPath: string = "";
  #overridesLocales: Set<string> = new Set();
  #templates: TemplateMap = {};
  #locale: string = "";

  /**
   * Configures the localization mechanism with override paths and initializes the runtime msg implementation.
   */
  configureLocalization(overridesLocales: string[], overridesBase: string) {
    this.#overridesLocales = new Set(overridesLocales);
    this.#overridesPath = overridesBase;
    if (!this.#overridesPath.endsWith("/")) {
      this.#overridesPath += "/";
    }
    this.#overridesPath = new URL(this.#overridesPath, document.baseURI).toString();
    // initialize lit-localize - msgImplementation allowed only once so keep flag on globalThis
    if (!(globalThis as any).__polyfea_localization_installed) {
      _installMsgImplementation(((template: TemplateLike, options?: MsgOptions): TemplateLike => {
        return runtimeMsg(
          (globalThis as any).__polyfea_localization_installed.templates(),
          template,
          options
        );
      }) as MsgFn);
    }
    (globalThis as any).__polyfea_localization_installed = { 
      templates: () => this.#templates,  
    };

    this.#registerLocaleLoader(
      "@polyfea/polyfea-md-shell",
      [...targetLocales],
      (locale) => import(/* @vite-ignore */ `./generated/locales/${locale}.js`)
    );

    window.addEventListener(REGISTER_LOCALE_EVENT, async (e: Event) => {
      const event = e as LoadLocaleEvent;
      const { module, locales, loader } = event.detail;
      await this.#registerLocaleLoader(module, locales, loader);
    });
    window.addEventListener(LOAD_LOCALES, async (e: Event) => {
      const event = e as CustomEvent<{ locale: string }>;
      const { locale } = event.detail;
      await this.#setLocale(locale);
    });
  }

  /**
   * Registers a dynamic locale loader for a specific module.
   */
  async #registerLocaleLoader(module: string, locales: string[], loader: LoaderFn) {
    if (!this.#loaders.has(module)) {
      this.#loaders.set(module, { locales: new Set(locales), loader });

      // reload templates for the new module
      if (this.#locale) {
        this.#dispatchStatusEvent({ status: "loading", locale: this.#locale });
        const result = await this.#loadModuleLocale(module, this.#locale);
        this.#loadedTemplates = { ...this.#loadedTemplates, ...result };
        this.#templates = { ...this.#loadedTemplates, ...this.#overrides };
        this.#dispatchStatusEvent({ status: "ready", locale: this.#locale });
      }
    }
  }

  /**
   * Sets the active locale and triggers the loading of all registered module translations and overrides.
   */
  async #setLocale(locale: string): Promise<void> {
    let overrides: { [key: string]: any } = {};
    this.#dispatchStatusEvent({ status: "loading", locale });
    const awaiters = Array.from(this.#loaders.keys()).map((module: string) =>
      this.#loadModuleLocale(module, locale)
    );

    if (this.#overridesPath) {
      awaiters.push(
        this.#loadOverrides(locale).then((ovr) => {
          //keep overrides separate for ad hoc merging of registered module loaders
          overrides = ovr;
          return {};
        })
      );
    }

    const loaded = await Promise.all(awaiters);
    this.#loadedTemplates = loaded.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    this.#overrides = { ...overrides };
    this.#templates = { ...this.#loadedTemplates, ...this.#overrides };
    this.#locale = locale;
    this.#dispatchStatusEvent({ status: "ready", locale });
  }

  /**
   * Resolves the best supported locale from a list of preferred locales against a set of available locales.
   */
  #resolveSupportedLocale(localesIn: readonly string[], allLocales: Set<string>): string {
    let resolvedLocale = "";
    for (const locale of localesIn) {
      if (allLocales.has(locale)) {
        resolvedLocale = locale;
        break;
      }

      const baseLocale = locale.split("-")[0];
      if (allLocales.has(baseLocale)) {
        resolvedLocale = baseLocale;
        break;
      }
    }
    return resolvedLocale;
  }

  #dispatchStatusEvent(detail: { locale: string; status: "loading" | "ready" | "error" }) {
    window.dispatchEvent(new CustomEvent(LOCALE_STATUS_EVENT, { 
      detail ,
    bubbles: true,
    composed: true,}));
  }

  async #loadModuleLocale(module: string, locale: string): Promise<TemplateMap> {
    const loaderEntry = this.#loaders.get(module)!;
    const { locales, loader } = loaderEntry;
    let result: TemplateMap = {};

    let browserLocales = navigator.languages || [navigator.language];
    if (locale) {
      browserLocales = [locale, ...browserLocales];
    }
    const resolvedLocale = this.#resolveSupportedLocale(
      browserLocales,
      loaderEntry.locales
    );
    if (locales.has(resolvedLocale)) {
      try {
        const mod = await loader(resolvedLocale);
        result = mod.templates || {};
      } catch (err) {
        console.warn(`Failed to load locale ${this.#locale} for module ${module}: ${err}`);
      }
    }
    return result;
  }

  async #loadOverrides(locale: string): Promise<TemplateMap> {
    let browserLocales = navigator.languages || [navigator.language];
    if (locale) {
      browserLocales = [locale, ...browserLocales];
    }
    const resolvedLocale = this.#resolveSupportedLocale(
      browserLocales,
      this.#overridesLocales
    );
    let result: TemplateMap = {};
    try {
      const locs = await import(/* @vite-ignore */ this.#overridesPath + `${resolvedLocale}.js`);
      result = locs.templates || {};
    } catch (err) {
      console.warn(
        `Failed to load locale ${locale} for system overrides from  ${
          this.#overridesPath + `${resolvedLocale}.js`
        }: ${err}`
      );
    }
    return result;
  }
}


