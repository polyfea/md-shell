import { LitElement } from 'lit';
/**
 * An application tile or icon that may be used in a launcher page or navigation area.
 *
 * @slot icon - icon to replace the icon shown in navigation, rail, and drawer variants. Takes priority over `icon-src` and `material-icon` properties.
 *
 * @cssprop --app-card-height - Specifies the height of the tile card. Default value is `14rem`.
 * @cssprop --app-card-width - Specifies the width of the tile card. Default value is `16rem`.
 * @cssprop --app-card-tile-img-height - Specifies the height of the tile image. Default value is `9rem`.
 * @cssprop --app-card-tile-img-background-color - Specifies the background color of the tile image. Default value is `var(--md-sys-color-secondary-container, olive)`.
 * @cssprop --app-card-tile-img-fit - Specifies the `object-fit` style for the tile image. Default value is `cover`.
 */
export declare class PolyfeaMdApp extends LitElement {
    #private;
    static styles: import('lit').CSSResult;
    /** The main title of the application. */
    headline: string;
    /** The main title of the application. */
    headlineLocalizeId: string;
    /** A shorter title of the application to display in icon variants.  */
    shortHeadline: string;
    /** Localize ID for translation instead of computed hash */
    shortHeadlineLocalizeId: string;
    /** Additional text to display in the tile variant rendering. */
    supportingText: string;
    /** Localize ID for translation instead of computed hash */
    supportingTextLocalizeId: string;
    /** The URL of the image to display in the tile variant rendering. */
    tileImgSrc: string;
    /** The URL of the image to display in the drawer, rail, or navigation variant rendering. */
    iconSrc: string;
    /**
     * This property specifies the name of the Material Symbol icon to be used.
     * It's only utilized if the `icon-src` property is not set.
     * For more details on Material Symbols, refer to the [Material Symbols documentation](https://fonts.google.com/icons).
     */
    materialIcon: string;
    /**
     * This property disables the image in the tile variant rendering. If the `tile-img-src` property is not specified, the colored content is used instead.
     * When the tile image is disabled, only the `headline` and `supporting-text` properties are rendered.
     */
    tileImgDisabled: boolean;
    /**
     * This property specifies the URL to navigate to when the element is clicked.
     * The click handler uses either the Navigation API's `navigate()` method or the History API's `pushState()` method.
     * For more details, refer to the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate)
     * and [History API](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) documentation.
     */
    href: string;
    /**
     * This property specifies whether the element is rendered as active on all paths prefixed by href. By default, the element is only active
     * when the href matches the current path. If set then active indicator is  considered only by  pathname and hash components
     * of the `href`attribute and it is set to true if this is a prefix of the current path+hash.
     */
    isActivePrefix: boolean;
    /**
     * This property specifies the context in which the element is rendered.
     * It's typically set by the `polyfea-context` element.
     * For more details, refer to the [`polyfea-context` documentation](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md).
     */
    context: string;
    /** The mode in which the app anchor is rendered. If not specified then
     * the mode is determined by the context name prefix (e.g. `drawer-content` will be drawer mode, and `navigation-icons`
     * will be navigation mode). In all other cases, the default mode is `tile`.
     */
    mode: 'tile' | 'drawer' | 'rail' | 'navigation' | null;
    isActive: boolean;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-app': PolyfeaMdApp;
    }
}
