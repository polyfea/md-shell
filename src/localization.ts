import { LOCALE_STATUS_EVENT, msg, type MsgOptions, type StrResult, type TemplateLike, type MsgFn, type TemplateMap  } from '@lit/localize';
import { targetLocales } from './generated/locale-codes';
import { createContext } from '@lit/context';
import type { TemplateResult } from 'lit-element/lit-element.js';
import { _installMsgImplementation } from '@lit/localize/init/install';
import { runtimeMsg } from '@lit/localize/internal/runtime-msg';

export type LocaleTemplates = { templates: TemplateMap };
export type LoaderFn = (locale: string) => Promise<LocaleTemplates>;

export type LoadLocaleEvent = CustomEvent<{ locales: string[]; module: string, loader: LoaderFn }>;

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
  }>('register-locale-module', {
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
  const event = new CustomEvent<{ locale: string }>(
    'theme-changed', {
    detail: { locale },
    bubbles: true,
    composed: true,
  });
  window.dispatchEvent(event);
}

/**
 * Registry interface for dynamic locale loaders.
 *  
 * Enables localization of third party modules and ad hoc loading of locale overrides.
 * @public
 * 
 */
export interface LocalesLoaderRegistry {
  /** Allows to register dynamic locale loaders for specific modules.
   *  The module may register multiple times but only the first registration is effective. Typically the module will be registered by its 
   * custom element `connectedCallback` lifecycle method.
   * 
   * Modules shall be uniquely identified by their name. Use a namespaced name to avoid conflicts, e.g. '@my-org/my-module'.
   * 
   * The locales array shall contain all locale codes that the loader can provide. The locale is selected by 
   * trying the best match between user selected locale in the shell or browser preference, considering or ignoring country prefix. 
   * In case there is no suitable match found then the msg calls will fall back to the original untranslated strings.
   * 
   * @param module 
   * @param locales 
   * @param loader 
   * @returns 
   */
  registerLocaleLoader: (module: string, locales: string[], loader: LoaderFn) => void;

  /** Retrieves the current active locale code. Empty if user haven't selected a locale yet. 
   * In such case the browser preference is used for loading translations.
   **/
  get locale(): string;

  /** Sets the active locale and triggers the loading of all registered module translations and overrides.
   * Your module can listend on the LOCALE_STATUS_EVENT event to track loading status or to use [Automatic re-rendering](https://lit.dev/docs/localization/runtime-mode/#automatically-re-render)
   * 
   * @param value locale code to set
   */
  setLocale(value: string): Promise<void>;
}

/** @internal */
export class LocalizationRegistry implements LocalesLoaderRegistry {
  #loaders: Map<
    string,
    {
      locales: Set<string>;
      loader: LoaderFn;
    }
  > = new Map();
  #loadedTemplates: TemplateMap = {};
  #overrides: TemplateMap = {};
  #overridesPath: string = '';
  #overridesLocales: Set<string> = new Set();
  #templates: TemplateMap = {};
  #locale: string = '';

  /**
   * Configures the localization mechanism with override paths and initializes the runtime msg implementation.
   */
  configureLocalization( overridesLocales: string[], overridesBase: string) {
    this.#overridesLocales = new Set(overridesLocales);
    this.#overridesPath = overridesBase;
    if (!this.#overridesPath.endsWith('/')) {
      this.#overridesPath += '/';
    }
    this.#overridesPath = new URL(this.#overridesPath, document.baseURI).toString();
    // initialize lit-localize - msgImplementation allowed only once so keep flag on globalThis
    if (!(globalThis as any).__polyfea_localization_installed) {

      _installMsgImplementation(((template: TemplateLike, options?: MsgOptions): TemplateLike => {
              return runtimeMsg((globalThis as any).__polyfea_localization_installed.templates(), template, options);
          }) as MsgFn);
    }
    (globalThis as any).__polyfea_localization_installed = {templates: () =>  this.#templates };

    this.registerLocaleLoader('@polyfea/polyfea-md-shell', [...targetLocales], locale => import(/* @vite-ignore */`./generated/locales/${locale}.js` ));
  }

  /**
   * Registers a dynamic locale loader for a specific module.
   */
  async registerLocaleLoader(module: string, locales: string[], loader: LoaderFn) {
    if (!this.#loaders.has(module)) {
      this.#loaders.set(module, { locales: new Set(locales), loader });

      // reload templates for the new module
      if (this.#locale) {
        this.#dispatchStatusEvent({ status: 'loading', locale: this.#locale });
        const result = await this.#loadModuleLocale(module, this.#locale);
        this.#loadedTemplates = { ...this.#loadedTemplates, ...result };
        this.#templates = { ...this.#loadedTemplates, ...this.#overrides };
        this.#dispatchStatusEvent({ status: 'ready', locale: this.#locale });
      }
    }
  }

  /**
   * Retrieves the current active locale code.
   */
  get locale(): string {
    return this.#locale;
  }

  /**
   * Sets the active locale and triggers the loading of all registered module translations and overrides.
   */
  async setLocale(locale: string): Promise<void> {
    let overrides: { [key: string]: any } = {};
    this.#dispatchStatusEvent({ status: 'loading', locale });
    const awaiters = Array.from(this.#loaders.keys()).map((module: string) => this.#loadModuleLocale(module, locale));

    if (this.#overridesPath) {
      awaiters.push(
        this.#loadOverrides(locale).then(ovr => {
          //keep overrides separate for ad hoc merging of registered module loaders
          overrides = ovr;
          return {};
        }),
      );
    }

    const loaded = await Promise.all(awaiters);
    this.#loadedTemplates = loaded.reduce((acc, curr) => ({ ...acc, ...curr }), {});
    this.#overrides = { ...overrides };
    this.#templates = { ...this.#loadedTemplates, ...this.#overrides };
    this.#locale = locale;
    this.#dispatchStatusEvent({ status: 'ready', locale });
  }

  /**
   * Resolves the best supported locale from a list of preferred locales against a set of available locales.
   */
  static resolveSupportedLocale(localesIn: readonly string[], allLocales: Set<string>): string {
    let resolvedLocale = ""
    for (const locale of localesIn) {
      if (allLocales.has(locale)) {
        resolvedLocale = locale;
        break;
      }

      const baseLocale = locale.split('-')[0];
      if (allLocales.has(baseLocale)) {
        resolvedLocale = baseLocale;
        break
      }
    }
    return resolvedLocale;
  }

  #dispatchStatusEvent(detail: { locale: string; status: 'loading' | 'ready' | 'error' }) {
    window.dispatchEvent(new CustomEvent(LOCALE_STATUS_EVENT, { detail }));
  }

  async #loadModuleLocale(module: string, locale: string): Promise<TemplateMap> {
    const loaderEntry = this.#loaders.get(module)!;
    const { locales, loader } = loaderEntry;
    let result: TemplateMap = {};

    let browserLocales = navigator.languages || [navigator.language];
    if (locale) {
      browserLocales = [locale, ...browserLocales];
    }
    const resolvedLocale = LocalizationRegistry.resolveSupportedLocale(browserLocales, loaderEntry.locales);
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
    const resolvedLocale = LocalizationRegistry.resolveSupportedLocale(browserLocales, this.#overridesLocales);
    let result: TemplateMap = {};
    try {
      const locs = await import(/* @vite-ignore */ this.#overridesPath + `${resolvedLocale}.js` );
      result = locs.templates || {};
    } catch (err) {
      console.warn(`Failed to load locale ${locale} for system overrides from  ${this.#overridesPath + `${resolvedLocale}.js`}: ${err}`);
    }
    return result;
  }
}

/** context to register module locale loaders */
export const localeLoadersContext = createContext<LocalesLoaderRegistry>(Symbol('locale-loaders'));

//** Helper function to dynamically localize messages with runtime only resolution (external translation)
// -  if id is empty then only input string/template is considered */
export const loc = (m: string | StrResult | TemplateResult | TemplateLike, id?: string) => {
  return id ? (msg as any)(m, { id }) : (msg as any)(m); // avoid typescript errors in lit-localize extract
};

