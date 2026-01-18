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
export declare const LOCALE_STORAGE_KEY = "@polyfea/user-locale";
export declare const REGISTER_LOCALE_EVENT = "register-locale-module";
export declare const loc: (m: string | StrResult | TemplateResult | TemplateLike, id?: string) => any;
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
/** Retrieves the active locale from local storage or sets it to browser preferred locale if not set */
export declare const loadLocale: () => string;
export declare const getLocale: () => string;
/** @internal */
export declare class LocalizationRegistry {
    #private;
    /**
     * Configures the localization mechanism with override paths and initializes the runtime msg implementation.
     */
    configureLocalization(overridesLocales: string[], overridesBase: string): void;
}
