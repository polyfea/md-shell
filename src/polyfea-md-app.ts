import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import styles from './polyfea-md-app.css?inline';
import { loc } from './localization';
import { updateWhenLocaleChanges } from '@lit/localize';



if (!globalThis.customElements.get('md-elevation')) {
  import('@material/web/elevation/elevation.js');
}
if (!globalThis.customElements.get('md-ripple')) {
  import('@material/web/ripple/ripple.js');
}
if (!globalThis.customElements.get('md-icon')) {
  import('@material/web/icon/icon.js');
}

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
@customElement('polyfea-md-app')
export class PolyfeaMdApp extends LitElement {
  static styles = unsafeCSS(styles);

  /** The main title of the application. */
  @property({attribute: 'headline'}) headline: string = '';

  /** The main title of the application. */
  @property({attribute: 'headline-localize-id'}) headlineLocalizeId: string = '';

  /** A shorter title of the application to display in icon variants.  */
  @property({attribute: 'short-headline'}) shortHeadline: string = '';

  /** Localize ID for translation instead of computed hash */
  @property({attribute: 'short-headline-localize-id'}) shortHeadlineLocalizeId: string = '';

  /** Additional text to display in the tile variant rendering. */
  @property({attribute: 'supporting-text'}) supportingText: string = '';

  /** Localize ID for translation instead of computed hash */
  @property({attribute: 'supporting-text-localize-id'}) supportingTextLocalizeId: string = '';

  /** The URL of the image to display in the tile variant rendering. */
  @property({attribute: 'tile-img-src'}) tileImgSrc: string = '';

  /** The URL of the image to display in the drawer, rail, or navigation variant rendering. */
  @property({attribute: 'icon-src'}) iconSrc: string = '';

  /**
   * This property specifies the name of the Material Symbol icon to be used.
   * It's only utilized if the `icon-src` property is not set.
   * For more details on Material Symbols, refer to the [Material Symbols documentation](https://fonts.google.com/icons).
   */
  @property({attribute: 'material-icon'}) materialIcon: string = '';

  /**
   * This property disables the image in the tile variant rendering. If the `tile-img-src` property is not specified, the colored content is used instead.
   * When the tile image is disabled, only the `headline` and `supporting-text` properties are rendered.
   */
  @property({attribute: 'tile-img-disabled'}) tileImgDisabled: boolean = false;

  /**
   * This property specifies the URL to navigate to when the element is clicked.
   * The click handler uses either the Navigation API's `navigate()` method or the History API's `pushState()` method.
   * For more details, refer to the [Navigation API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation/navigate) 
   * and [History API](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState) documentation.
   */
  @property({attribute: 'href'}) href: string = '';

  /**
   * This property specifies whether the element is rendered as active on all paths prefixed by href. By default, the element is only active
   * when the href matches the current path. If set then active indicator is  considered only by  pathname and hash components 
   * of the `href`attribute and it is set to true if this is a prefix of the current path+hash.
   */
  @property({attribute: 'is-active-prefix', type: Boolean}) isActivePrefix: boolean = false;

  /**
   * This property specifies the context in which the element is rendered.
   * It's typically set by the `polyfea-context` element.
   * For more details, refer to the [`polyfea-context` documentation](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md).
   */
  @property({
    reflect: true,
    attribute: 'context',
  })
  context: string = '';

  /** The mode in which the app anchor is rendered. If not specified then
   * the mode is determined by the context name prefix (e.g. `drawer-content` will be drawer mode, and `navigation-icons`
   * will be navigation mode). In all other cases, the default mode is `tile`.
   */
  @property({ type: String })
  mode: 'tile' | 'drawer' | 'rail' | 'navigation' | null = null;

  @state() isActive: boolean = false;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  connectedCallback() {
    super.connectedCallback();
    if ((globalThis as any).navigation?.addEventListener) {
      (globalThis as any).navigation?.addEventListener('navigatesuccess', this.#onNavigateSuccess.bind(this));
    }
    this.#onNavigateSuccess();
  }
  disconnectedCallback() {
    if ((globalThis as any).navigation?.removeEventListener) {
      (globalThis as any).navigation?.removeEventListener('navigatesuccess', this.#onNavigateSuccess.bind(this));
    }
    super.disconnectedCallback();
  }

  #onNavigateSuccess() {
    const url = new URL(this.href, new URL(document.baseURI, document.location.href || 'http://localhost'));
    
    if (this.isActivePrefix) {
      const expectedPrefix = url.pathname + url.hash;
      const actualPrefix = window.location.pathname + window.location.hash;
      this.isActive = actualPrefix.startsWith(expectedPrefix);
    } else {
      this.isActive = window.location.href === url.href;
    }
  }

  render() {
    let mode = this.mode;
    if (!mode && this.context) {
      const m = this.context.split('-')[0];
      if (m === 'drawer' || m === 'rail' || m === 'navigation') {
        mode = m;
      }
    }
    if (!mode || mode === 'tile') {
      this.setAttribute('class', 'tile');
      return this.#renderTile();
    } else {
      this.setAttribute('class', mode || 'icon');
      return this.#renderIcon(mode);
    }
  }

  #renderTile() {
    return html` <a class="card-wrapper" href=${this.href} @click=${(e: Event) => this.#navigate(e)}>
      <md-elevation></md-elevation>
      <md-ripple></md-ripple>
      ${this.tileImgDisabled
        ? ''
        : html`
            <div class="tile-picture">
              <img src=${this.tileImgSrc} alt="" />
            </div>
          `}
      <div class="content">
        <div class="headline">${loc(this.headline, this.headlineLocalizeId)}</div>
        <div class="supporting-text">${loc(this.supportingText, this.supportingTextLocalizeId)}</div>
      </div>
    </a>`;
  }

  #renderIcon(mod: string) {
    return html`
      <a class=${mod+"-button"} href=${this.href} @click=${(e: Event) => this.#navigate(e)}>
        <div class=${'icon' + (this.isActive ? ' active' : '')}>
          <md-ripple></md-ripple>
          <slot name="icon"> ${this.iconSrc ? html`<img src=${this.iconSrc} alt="" />` : this.materialIcon ? html`<md-icon>${this.materialIcon}</md-icon>` : undefined} </slot>
        </div>
        <div class="headline">${loc((this.shortHeadline || this.headline || '') as any, this.shortHeadlineLocalizeId)}</div>
      </a>
    `;
  }

  #navigate(e: Event) {
    e.preventDefault();
    setTimeout(() => {
      if ((globalThis as any).navigation) {
        (globalThis as any).navigation.navigate(this.href);
      } else {
        window.history.pushState({}, '', this.href);
      }
    }, 300);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-app': PolyfeaMdApp;
  }
}
