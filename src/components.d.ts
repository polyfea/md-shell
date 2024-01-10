/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Theme } from "./components/polyfea-md-theme-control/polyfea-md-theme-control";
export { Theme } from "./components/polyfea-md-theme-control/polyfea-md-theme-control";
export namespace Components {
    interface PolyfeaMdApp {
        /**
          * /** This property specifies the context in which the element is rendered.  It's typically set by the `polyfea-context` element. For more details, refer to the [`polyfea-context` documentation](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md).
         */
        "context": string;
        /**
          * The main title of the application.
         */
        "headline": string;
        /**
          * This property specifies the URL to navigate to when the element is clicked.  The click handler uses either the Navigation API's `navigate()` method or the History API's `pushState()` method. For more details, refer to the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate) and [History API](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) documentation.
         */
        "href": string;
        /**
          * The URL of the image to display in the drawer, rail, or navigation variant rendering.
         */
        "iconSrc": string;
        /**
          * This property specifies whether the element is actived on all paths prefixed by href. By default, the element is only active when the href matches the current path.
         */
        "isActivePrefix": boolean;
        /**
          * This property specifies the name of the Material Symbol icon to be used.  It's only utilized if the `icon-src` property is not set.  For more details on Material Symbols, refer to the [Material Symbols documentation](https://fonts.google.com/icons).
         */
        "materialIcon": string;
        /**
          * A shorter version of the headline, used in drawer, rail, or navigation variant rendering.
         */
        "shortHeadline": string;
        /**
          * Additional text to display in the tile variant rendering.
         */
        "supportingText": string;
        /**
          * This property disables the image in the tile variant rendering. If the `tile-img-src` property is not specified, the colored content is used instead.  When the tile image is disabled, only the `headline` and `supporting-text` properties are rendered.
         */
        "tileImgDisabled": boolean;
        /**
          * The URL of the image to display in the tile variant rendering.
         */
        "tileImgSrc": string;
    }
    /**
     * /**
     */
    interface PolyfeaMdApps {
        /**
          * name of the [polyfe-context](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md)  element that will be used to render the applications web components.
         */
        "applicationsContext": string;
    }
    interface PolyfeaMdDrawer {
        /**
          * By default, the drawer includes a close button. If this property is set to false, the close button will be hidden.  This can be useful when the drawer is used for navigation and a close button is unnecessary.
         */
        "closeDisabled": boolean;
    }
    interface PolyfeaMdDrawerLabel {
        /**
          * The headline of the label. May be empty if slot is used
         */
        "headline": string;
    }
    interface PolyfeaMdNavigationBar {
    }
    interface PolyfeaMdRail {
        /**
          * The alignment of the navigation actions.
         */
        "contentPosition": 'top' | 'middle' | 'bottom';
        /**
          * The rail show drawer open icon by default. Set this property to false to hide it
         */
        "drawerDisabled": boolean;
    }
    interface PolyfeaMdShell {
        /**
          * The name of the application displayed in the top bar. This is only shown  if the `app-shell-title` context area is empty.
         */
        "applicationHeadline": string;
        /**
          * Determines whether the close button in the navigation drawer is hidden.
         */
        "drawerCloseDisabled": boolean;
        /**
          * If set to true, the navigation drawer will be hidden in all screen resolutions.
         */
        "drawerDisabled": boolean;
        /**
          * If set to true, the navigation bar will be hidden in all screen resolutions.
         */
        "navigationDisabled": boolean;
        /**
          * If set to true, the navigation rail will be hidden in all screen resolutions.
         */
        "railDisabled": boolean;
        /**
          * Controls the visibility of the legibility buttons (font size adjustment, theme toggle) in the top bar menu.
         */
        "themeMenuDisabled": boolean;
        /**
          * If set to true, the menu button on the right side of the top bar will be hidden.
         */
        "topbarMoreDisabled": boolean;
        /**
          * Variant of the topbar. See [Top App Bar](https://m3.material.io/components/top-app-bar/overview) documentation.
         */
        "topbarVariant": "centered" | "small" | "medium" | "large";
    }
    interface PolyfeaMdThemeControl {
        /**
          * This property specifies which aspect of the theme is controlled by this element.
         */
        "control": "theme-toggle" | "text-increase" | "text-decrease" | "reset-font";
        /**
          * This property controls the display variant of the theme control. It can be used to render the control  as an icon button or a menu item.   The "preset" variant doesn't render anything but initializes the theme based on user preferences stored in local storage.  Include this in your document to ensure the theme is properly initialized.
         */
        "variant": "button" | "menu-item" | "preset";
    }
    interface PolyfeaMdTopbar {
        /**
          * Text of the headline
         */
        "headline": string;
        /**
          * Icon to show in the leading position of the top bar if the `leading` slot is left empty. Possible values are: - `none` - No icon is shown. - `drawer` - A [menu](https://fonts.google.com/icons?icon.query=menu) icon is shown that opens the drawer. - `back` - A [back](arrow_back) icon is shown that emits a `back` event when clicked.
         */
        "leadingIcon": "none" | "drawer" | "back";
        /**
          * Controls if right side icon with more actions menu is rendered
         */
        "moreActionsDisabled": boolean;
        /**
          * Variant of the applications top bar - changes the layout and size of the top bar. Possible values are: - `centered` - The top bar is centered and has a fixed height, only "more actions" menu or single trailing icon.  - `small` - The top bar has a fixed height and a menu and trailing icons. - `medium` - The top bar has a fixed height and a menu and trailing icons. Headline is bigger on separate line. - `large` - The top bar has a fixed height and a menu and trailing icons. Headline is bigger on separate line with wrapping enabled.
         */
        "variant": "centered" | "small" | "medium" | "large";
    }
}
export interface PolyfeaMdDrawerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPolyfeaMdDrawerElement;
}
export interface PolyfeaMdRailCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPolyfeaMdRailElement;
}
export interface PolyfeaMdThemeControlCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPolyfeaMdThemeControlElement;
}
export interface PolyfeaMdTopbarCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPolyfeaMdTopbarElement;
}
declare global {
    interface HTMLPolyfeaMdAppElement extends Components.PolyfeaMdApp, HTMLStencilElement {
    }
    var HTMLPolyfeaMdAppElement: {
        prototype: HTMLPolyfeaMdAppElement;
        new (): HTMLPolyfeaMdAppElement;
    };
    /**
     * /**
     */
    interface HTMLPolyfeaMdAppsElement extends Components.PolyfeaMdApps, HTMLStencilElement {
    }
    var HTMLPolyfeaMdAppsElement: {
        prototype: HTMLPolyfeaMdAppsElement;
        new (): HTMLPolyfeaMdAppsElement;
    };
    interface HTMLPolyfeaMdDrawerElementEventMap {
        "drawerClosed": any;
    }
    interface HTMLPolyfeaMdDrawerElement extends Components.PolyfeaMdDrawer, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPolyfeaMdDrawerElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdDrawerElement, ev: PolyfeaMdDrawerCustomEvent<HTMLPolyfeaMdDrawerElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPolyfeaMdDrawerElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdDrawerElement, ev: PolyfeaMdDrawerCustomEvent<HTMLPolyfeaMdDrawerElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPolyfeaMdDrawerElement: {
        prototype: HTMLPolyfeaMdDrawerElement;
        new (): HTMLPolyfeaMdDrawerElement;
    };
    interface HTMLPolyfeaMdDrawerLabelElement extends Components.PolyfeaMdDrawerLabel, HTMLStencilElement {
    }
    var HTMLPolyfeaMdDrawerLabelElement: {
        prototype: HTMLPolyfeaMdDrawerLabelElement;
        new (): HTMLPolyfeaMdDrawerLabelElement;
    };
    interface HTMLPolyfeaMdNavigationBarElement extends Components.PolyfeaMdNavigationBar, HTMLStencilElement {
    }
    var HTMLPolyfeaMdNavigationBarElement: {
        prototype: HTMLPolyfeaMdNavigationBarElement;
        new (): HTMLPolyfeaMdNavigationBarElement;
    };
    interface HTMLPolyfeaMdRailElementEventMap {
        "drawerOpened": any;
    }
    interface HTMLPolyfeaMdRailElement extends Components.PolyfeaMdRail, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPolyfeaMdRailElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdRailElement, ev: PolyfeaMdRailCustomEvent<HTMLPolyfeaMdRailElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPolyfeaMdRailElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdRailElement, ev: PolyfeaMdRailCustomEvent<HTMLPolyfeaMdRailElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPolyfeaMdRailElement: {
        prototype: HTMLPolyfeaMdRailElement;
        new (): HTMLPolyfeaMdRailElement;
    };
    interface HTMLPolyfeaMdShellElement extends Components.PolyfeaMdShell, HTMLStencilElement {
    }
    var HTMLPolyfeaMdShellElement: {
        prototype: HTMLPolyfeaMdShellElement;
        new (): HTMLPolyfeaMdShellElement;
    };
    interface HTMLPolyfeaMdThemeControlElementEventMap {
        "themeChanged": Theme;
    }
    interface HTMLPolyfeaMdThemeControlElement extends Components.PolyfeaMdThemeControl, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPolyfeaMdThemeControlElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdThemeControlElement, ev: PolyfeaMdThemeControlCustomEvent<HTMLPolyfeaMdThemeControlElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPolyfeaMdThemeControlElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdThemeControlElement, ev: PolyfeaMdThemeControlCustomEvent<HTMLPolyfeaMdThemeControlElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPolyfeaMdThemeControlElement: {
        prototype: HTMLPolyfeaMdThemeControlElement;
        new (): HTMLPolyfeaMdThemeControlElement;
    };
    interface HTMLPolyfeaMdTopbarElementEventMap {
        "drawerOpened": any;
        "back": any;
    }
    interface HTMLPolyfeaMdTopbarElement extends Components.PolyfeaMdTopbar, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPolyfeaMdTopbarElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdTopbarElement, ev: PolyfeaMdTopbarCustomEvent<HTMLPolyfeaMdTopbarElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPolyfeaMdTopbarElementEventMap>(type: K, listener: (this: HTMLPolyfeaMdTopbarElement, ev: PolyfeaMdTopbarCustomEvent<HTMLPolyfeaMdTopbarElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPolyfeaMdTopbarElement: {
        prototype: HTMLPolyfeaMdTopbarElement;
        new (): HTMLPolyfeaMdTopbarElement;
    };
    interface HTMLElementTagNameMap {
        "polyfea-md-app": HTMLPolyfeaMdAppElement;
        "polyfea-md-apps": HTMLPolyfeaMdAppsElement;
        "polyfea-md-drawer": HTMLPolyfeaMdDrawerElement;
        "polyfea-md-drawer-label": HTMLPolyfeaMdDrawerLabelElement;
        "polyfea-md-navigation-bar": HTMLPolyfeaMdNavigationBarElement;
        "polyfea-md-rail": HTMLPolyfeaMdRailElement;
        "polyfea-md-shell": HTMLPolyfeaMdShellElement;
        "polyfea-md-theme-control": HTMLPolyfeaMdThemeControlElement;
        "polyfea-md-topbar": HTMLPolyfeaMdTopbarElement;
    }
}
declare namespace LocalJSX {
    interface PolyfeaMdApp {
        /**
          * /** This property specifies the context in which the element is rendered.  It's typically set by the `polyfea-context` element. For more details, refer to the [`polyfea-context` documentation](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md).
         */
        "context"?: string;
        /**
          * The main title of the application.
         */
        "headline"?: string;
        /**
          * This property specifies the URL to navigate to when the element is clicked.  The click handler uses either the Navigation API's `navigate()` method or the History API's `pushState()` method. For more details, refer to the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate) and [History API](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) documentation.
         */
        "href"?: string;
        /**
          * The URL of the image to display in the drawer, rail, or navigation variant rendering.
         */
        "iconSrc"?: string;
        /**
          * This property specifies whether the element is actived on all paths prefixed by href. By default, the element is only active when the href matches the current path.
         */
        "isActivePrefix"?: boolean;
        /**
          * This property specifies the name of the Material Symbol icon to be used.  It's only utilized if the `icon-src` property is not set.  For more details on Material Symbols, refer to the [Material Symbols documentation](https://fonts.google.com/icons).
         */
        "materialIcon"?: string;
        /**
          * A shorter version of the headline, used in drawer, rail, or navigation variant rendering.
         */
        "shortHeadline"?: string;
        /**
          * Additional text to display in the tile variant rendering.
         */
        "supportingText"?: string;
        /**
          * This property disables the image in the tile variant rendering. If the `tile-img-src` property is not specified, the colored content is used instead.  When the tile image is disabled, only the `headline` and `supporting-text` properties are rendered.
         */
        "tileImgDisabled"?: boolean;
        /**
          * The URL of the image to display in the tile variant rendering.
         */
        "tileImgSrc"?: string;
    }
    /**
     * /**
     */
    interface PolyfeaMdApps {
        /**
          * name of the [polyfe-context](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md)  element that will be used to render the applications web components.
         */
        "applicationsContext"?: string;
    }
    interface PolyfeaMdDrawer {
        /**
          * By default, the drawer includes a close button. If this property is set to false, the close button will be hidden.  This can be useful when the drawer is used for navigation and a close button is unnecessary.
         */
        "closeDisabled"?: boolean;
        /**
          * Rised when the close button is clicked indicating the user want to close the drawer
         */
        "onDrawerClosed"?: (event: PolyfeaMdDrawerCustomEvent<any>) => void;
    }
    interface PolyfeaMdDrawerLabel {
        /**
          * The headline of the label. May be empty if slot is used
         */
        "headline"?: string;
    }
    interface PolyfeaMdNavigationBar {
    }
    interface PolyfeaMdRail {
        /**
          * The alignment of the navigation actions.
         */
        "contentPosition"?: 'top' | 'middle' | 'bottom';
        /**
          * The rail show drawer open icon by default. Set this property to false to hide it
         */
        "drawerDisabled"?: boolean;
        /**
          * Raised when the drawer open icon is clicked indicating the user want to open the drawer. Drawer and rail are  mutually exclusive, the logic of showing one or other is controlled by the parent component.
         */
        "onDrawerOpened"?: (event: PolyfeaMdRailCustomEvent<any>) => void;
    }
    interface PolyfeaMdShell {
        /**
          * The name of the application displayed in the top bar. This is only shown  if the `app-shell-title` context area is empty.
         */
        "applicationHeadline"?: string;
        /**
          * Determines whether the close button in the navigation drawer is hidden.
         */
        "drawerCloseDisabled"?: boolean;
        /**
          * If set to true, the navigation drawer will be hidden in all screen resolutions.
         */
        "drawerDisabled"?: boolean;
        /**
          * If set to true, the navigation bar will be hidden in all screen resolutions.
         */
        "navigationDisabled"?: boolean;
        /**
          * If set to true, the navigation rail will be hidden in all screen resolutions.
         */
        "railDisabled"?: boolean;
        /**
          * Controls the visibility of the legibility buttons (font size adjustment, theme toggle) in the top bar menu.
         */
        "themeMenuDisabled"?: boolean;
        /**
          * If set to true, the menu button on the right side of the top bar will be hidden.
         */
        "topbarMoreDisabled"?: boolean;
        /**
          * Variant of the topbar. See [Top App Bar](https://m3.material.io/components/top-app-bar/overview) documentation.
         */
        "topbarVariant"?: "centered" | "small" | "medium" | "large";
    }
    interface PolyfeaMdThemeControl {
        /**
          * This property specifies which aspect of the theme is controlled by this element.
         */
        "control"?: "theme-toggle" | "text-increase" | "text-decrease" | "reset-font";
        /**
          * This event is fired when the theme is changed by the user.
         */
        "onThemeChanged"?: (event: PolyfeaMdThemeControlCustomEvent<Theme>) => void;
        /**
          * This property controls the display variant of the theme control. It can be used to render the control  as an icon button or a menu item.   The "preset" variant doesn't render anything but initializes the theme based on user preferences stored in local storage.  Include this in your document to ensure the theme is properly initialized.
         */
        "variant"?: "button" | "menu-item" | "preset";
    }
    interface PolyfeaMdTopbar {
        /**
          * Text of the headline
         */
        "headline"?: string;
        /**
          * Icon to show in the leading position of the top bar if the `leading` slot is left empty. Possible values are: - `none` - No icon is shown. - `drawer` - A [menu](https://fonts.google.com/icons?icon.query=menu) icon is shown that opens the drawer. - `back` - A [back](arrow_back) icon is shown that emits a `back` event when clicked.
         */
        "leadingIcon"?: "none" | "drawer" | "back";
        /**
          * Controls if right side icon with more actions menu is rendered
         */
        "moreActionsDisabled"?: boolean;
        /**
          * Emitted when clicking on the back leading icon button. The parent component shall set the `leading-icon` to `none` if there is no back action
         */
        "onBack"?: (event: PolyfeaMdTopbarCustomEvent<any>) => void;
        /**
          * Emitted when clicking on the drawer leading icon button. The parent component shall set the `leading-icon` to `none` if the drawer is open
         */
        "onDrawerOpened"?: (event: PolyfeaMdTopbarCustomEvent<any>) => void;
        /**
          * Variant of the applications top bar - changes the layout and size of the top bar. Possible values are: - `centered` - The top bar is centered and has a fixed height, only "more actions" menu or single trailing icon.  - `small` - The top bar has a fixed height and a menu and trailing icons. - `medium` - The top bar has a fixed height and a menu and trailing icons. Headline is bigger on separate line. - `large` - The top bar has a fixed height and a menu and trailing icons. Headline is bigger on separate line with wrapping enabled.
         */
        "variant"?: "centered" | "small" | "medium" | "large";
    }
    interface IntrinsicElements {
        "polyfea-md-app": PolyfeaMdApp;
        "polyfea-md-apps": PolyfeaMdApps;
        "polyfea-md-drawer": PolyfeaMdDrawer;
        "polyfea-md-drawer-label": PolyfeaMdDrawerLabel;
        "polyfea-md-navigation-bar": PolyfeaMdNavigationBar;
        "polyfea-md-rail": PolyfeaMdRail;
        "polyfea-md-shell": PolyfeaMdShell;
        "polyfea-md-theme-control": PolyfeaMdThemeControl;
        "polyfea-md-topbar": PolyfeaMdTopbar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "polyfea-md-app": LocalJSX.PolyfeaMdApp & JSXBase.HTMLAttributes<HTMLPolyfeaMdAppElement>;
            /**
             * /**
             */
            "polyfea-md-apps": LocalJSX.PolyfeaMdApps & JSXBase.HTMLAttributes<HTMLPolyfeaMdAppsElement>;
            "polyfea-md-drawer": LocalJSX.PolyfeaMdDrawer & JSXBase.HTMLAttributes<HTMLPolyfeaMdDrawerElement>;
            "polyfea-md-drawer-label": LocalJSX.PolyfeaMdDrawerLabel & JSXBase.HTMLAttributes<HTMLPolyfeaMdDrawerLabelElement>;
            "polyfea-md-navigation-bar": LocalJSX.PolyfeaMdNavigationBar & JSXBase.HTMLAttributes<HTMLPolyfeaMdNavigationBarElement>;
            "polyfea-md-rail": LocalJSX.PolyfeaMdRail & JSXBase.HTMLAttributes<HTMLPolyfeaMdRailElement>;
            "polyfea-md-shell": LocalJSX.PolyfeaMdShell & JSXBase.HTMLAttributes<HTMLPolyfeaMdShellElement>;
            "polyfea-md-theme-control": LocalJSX.PolyfeaMdThemeControl & JSXBase.HTMLAttributes<HTMLPolyfeaMdThemeControlElement>;
            "polyfea-md-topbar": LocalJSX.PolyfeaMdTopbar & JSXBase.HTMLAttributes<HTMLPolyfeaMdTopbarElement>;
        }
    }
}
