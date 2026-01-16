import { LitElement } from 'lit';
export declare class PolyfeaMdLocaleMenu extends LitElement {
    #private;
    /**
     * list of supported locales
     */
    locales: string[];
    /**
     * current selected locale
     */
    currentLocale: string;
    /**
     * Path to the flag-icons CSS file
     */
    flagIconsPath: string;
    /**
     * Reference to the menu element for programmatic opening/closing
     */
    private menu;
    private menuOpen;
    static styles: import('lit').CSSResult;
    connectedCallback(): void;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-locale-menu': PolyfeaMdLocaleMenu;
    }
}
