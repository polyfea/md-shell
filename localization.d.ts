import { StrResult, TemplateLike, TemplateMap } from '@lit/localize';
import { TemplateResult } from 'lit-element/lit-element.js';
export type LocaleTemplates = {
    templates: TemplateMap;
};
export type LoaderFn = (locale: string) => Promise<LocaleTemplates>;
export type LoadLocaleEvent = CustomEvent<{
    locales: string[];
    module: string;
    loader: LoaderFn;
}>;
/** Registers a locale module with its available locales and loader function. Assumes <polyfea-md-shell> or other
 * controller of LocalesLoaderRegistry is already instantiated and listening to the event
 *
 * @param module scoped module name (e.g. '@my-org/my-module')
 * @param locales array of locale codes that the loader can provide
 * @param loader function that loads the locale module dynamically
 */
export declare const registerLocaleModule: (module: string, locales: string[], loader: LoaderFn) => void;
/**
 * Sets the active locale by dispatching a 'theme-changed' event.
 *
 * @param locale - locale code to set
 */
export declare const setLocale: (locale: string) => Promise<void>;
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
export declare class LocalizationRegistry implements LocalesLoaderRegistry {
    #private;
    /**
     * Configures the localization mechanism with override paths and initializes the runtime msg implementation.
     */
    configureLocalization(overridesLocales: string[], overridesBase: string): void;
    /**
     * Registers a dynamic locale loader for a specific module.
     */
    registerLocaleLoader(module: string, locales: string[], loader: LoaderFn): Promise<void>;
    /**
     * Retrieves the current active locale code.
     */
    get locale(): string;
    /**
     * Sets the active locale and triggers the loading of all registered module translations and overrides.
     */
    setLocale(locale: string): Promise<void>;
    /**
     * Resolves the best supported locale from a list of preferred locales against a set of available locales.
     */
    static resolveSupportedLocale(localesIn: readonly string[], allLocales: Set<string>): string;
}
/** context to register module locale loaders */
export declare const localeLoadersContext: {
    __context__: LocalesLoaderRegistry;
};
export declare const loc: (m: string | StrResult | TemplateResult | TemplateLike, id?: string) => any;
