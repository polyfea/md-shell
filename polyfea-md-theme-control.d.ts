import { LitElement } from 'lit';
export type ThemeMode = 'light' | 'dark';
export type Theme = {
    isDark: boolean;
    scale?: number;
    followSystemTheme: boolean;
};
/**
 * A control component to toggle between light and dark themes or adjust font sizes.
 * It can be rendered as an icon button, a menu item, or a hidden preset loader.
 *
 * @fires polyfea-theme-changed - Fired when the theme is changed by the user.
 */
export declare class PolyfeaMdThemeControl extends LitElement {
    #private;
    /**
     * This property controls the display variant of the theme control. It can be used to render the control
     * as an icon button or a menu item.
     *
     * The "preset" variant doesn't render anything but initializes the theme based on user preferences stored in local storage.
     * Include this in your document to ensure the theme is properly initialized.
     */
    variant: 'button' | 'menu-item';
    /**
     * This property specifies which aspect of the theme is controlled by this element.
     */
    control: 'theme-toggle' | 'text-increase' | 'text-decrease' | 'reset-font';
    private _theme;
    static THEME_CHANGED_EVENT: string;
    private static _THEME_STORAGE_KEY;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import('lit-html').TemplateResult<1> | undefined;
    static loadTheme(): Theme;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-theme-control': PolyfeaMdThemeControl;
    }
}
