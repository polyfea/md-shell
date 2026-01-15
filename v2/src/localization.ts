import { LOCALE_STATUS_EVENT, msg, type MsgOptions, type StrResult, type TemplateLike, type MsgFn, type TemplateMap  } from '@lit/localize';
import { targetLocales } from './generated/locale-codes';
import { createContext } from '@lit/context';
import type { TemplateResult } from 'lit-element/lit-element.js';
import { _installMsgImplementation } from '@lit/localize/init/install';
import { runtimeMsg } from '@lit/localize/internal/runtime-msg';

type LocaleTemplates = { templates: TemplateMap };
type LoaderFn = (locale: string) => Promise<LocaleTemplates>;

export interface LocalesLoaderRegistry {
  registerLocaleLoader: (module: string, locales: string[], loader: LoaderFn) => void;
  get locale(): string;
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

  get locale(): string {
    return this.#locale;
  }

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

  #dispatchStatusEvent(detail: { locale: string; status: 'loading' | 'ready' | 'error' }) {
    window.dispatchEvent(new CustomEvent(LOCALE_STATUS_EVENT, { detail }));
  }
}

/** context to register module locale loaders */
export const localeLoadersContext = createContext<LocalesLoaderRegistry>(Symbol('locale-loaders'));

//** Helper function to dynamically localize messages with runtime only resolution (external translation)
// -  if id is empty then only input string/template is considered */
export const loc = (m: string | StrResult | TemplateResult | TemplateLike, id?: string) => {
  return id ? (msg as any)(m, { id }) : (msg as any)(m); // avoid typescript errors in lit-localize extract
};

