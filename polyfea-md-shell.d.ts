import { LitElement } from 'lit';
/**
 * A Material Design based application shell component that provides a structured layout with a top bar, navigation drawer, navigation rail, and main content area.
 * It provides slots to customize these areas and context areas for dynamic content injection using polyfea-context. Embedded is a style element with Material Design tokens for colors, typography, and shapes.
 *
 * @slot topbar-leading - Place content in the leading icon area of the top bar. Defaults to the drawer icon.  Overridden by `topbar-leading-icon` context area.
 * @slot topbar-trailing - Place content in the trailing icon area of the top bar. Defaults to the menu icon. Overridden by `topbar-trailing-icon` context area.
 * @slot topbar-menu - Place content in the top bar's menu area. Overridden by `topbar-menu-items` context area. Use [md-menu-item](https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item) for menu items.
 * @slot navigation - Place content in the navigation bar. Recommended: [polyfea-md-app](../polyfea-md-app/readme.md) elements. Overriden by `navigation-content` context area.
 * @slot rail - Place content in the navigation rail. Recommended: [polyfea-md-app](../polyfea-md-app/readme.md) elements. Overriden by `rail-content` context area.
 * @slot drawer - Place content in the navigation drawer. Recommended: [polyfea-md-app](../polyfea-md-app/readme.md) elements. Overriden by `drawer-content` context area.
 * @slot - Place content in the main content area. For landing page, use [polyfea-md-apps](../polyfea-md-apps/readme.md) element. Overriden by `main-content` context area.
 * @slot rail-primary-action - Place content in the primary action area of the navigation rail. Recommended: [md-fab](https://github.com/material-components/material-web/blob/main/docs/components/fab.md) elements. Overriden by `rail-primary-actions` context area. Overriden by `rail-primary-action` context area.
 *
 * @cssprop --rail-width - Width of the navigation rail.
 * @cssprop --drawer-width - Width of the navigation drawer.
 * @cssprop --navigation-height - Height of the navigation bar.
 * @cssprop --footer-height - Height of the footer area.
 *
 * @cssparts topbar - The top application bar.
 * @cssparts main - The main content area.
 * @cssparts navigation - The navigation bar.
 * @cssparts rail - The navigation rail.
 * @cssparts drawer - The navigation drawer.
 */
export declare class PolyfeaMdShell extends LitElement {
    #private;
    static styles: import('lit').CSSResult[];
    /**
     * The name of the application displayed in the top bar. This is only shown
     * if the `app-shell-title` context area is empty.
     */
    applicationHeadline: string;
    /**
     *  The localization ID for the application headline. Used with `lit-localize`
     */
    applicationHeadlineLocalizedId: string;
    /**
     * If set to true, the menu button on the right side of the top bar will be hidden.
     */
    topbarMoreDisabled: boolean;
    /**
     * If set to true, the navigation drawer will be hidden in all screen resolutions.
     */
    drawerDisabled: boolean;
    /**
     * Determines whether the close button in the navigation drawer is hidden.
     */
    drawerCloseDisabled: boolean;
    /**
     * If set to true, the navigation rail will be hidden in all screen resolutions.
     */
    railDisabled: boolean;
    /**
     * If set to true, the navigation bar will be hidden in all screen resolutions.
     */
    navigationDisabled: boolean;
    /** Variant of the topbar. See [Top App Bar](https://m3.material.io/components/top-app-bar/overview) documentation. */
    topbarVariant: 'centered' | 'small' | 'medium' | 'large';
    /** Small media size breakpoint in rem. */
    smallBreakpointRem: number;
    /** Medium media size breakpoint in rem. */
    mediumBreakpointRem: number;
    /** theme primary color in hex rgb format */
    themePrimaryColor: string;
    /** theme secondary color in hex rgb format */
    themeSecondaryColor: string;
    /** theme tertiary color in hex rgb format */
    themeTertiaryColor: string;
    /** theme error color in hex rgb format */
    themeErrorColor: string;
    /** theme brand font family (implicit 'Roboto Slab Variable', 'Roboto Slab', serif) */
    themeBrandFont: string;
    /** theme plain font family (implicit 'Roboto Flex Variable', 'Roboto Flex', Roboto, sans-serif) */
    themePlainFont: string;
    /** theme icon font family (implicit 'Material Symbols Outlined Variable', 'Material Symbols Outlined') */
    themeIconFont: string;
    /** scaling multiplier for default font-size of particular theme roles */
    themeScaleMultiplier: number;
    /**
     * Controls the visibility of the legibility buttons (font size adjustment, theme toggle) in the top bar menu.
     */
    themeMenu: boolean;
    /** URL to locales base path from where to load extra localization files (e.g. '/locales'). Locales are expected to be in <locale>.js files.
     * These locales may overload built-in localizations that are otherwise registered in the context `locales-loaders`.
     */
    localesPath: string;
    /** List of locales to load extra localization files for. */
    locales: string[];
    /** If set to true, a locale selection menu will be displayed in more action menu*/
    localeMenu: boolean;
    /** If set to true, the shell will be positioned absolutely with top, right, bottom, and left set to 0. */
    absolutePosition: boolean;
    private _drawerOpen;
    private _scrolled;
    /** Initializes component state, loads themes/locales, and attaches global event listeners. */
    connectedCallback(): void;
    /** Cleans up global event listeners to prevent memory leaks. */
    disconnectedCallback(): void;
    /** Reacts to property changes to update internal controllers like the resize controller. */
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
    /** Generates the HTML structure of the shell based on current state and properties. */
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-shell': PolyfeaMdShell;
    }
}
