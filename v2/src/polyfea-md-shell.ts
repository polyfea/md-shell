import { LitElement, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './polyfea-md-shell.css?inline';
import grid from './polyfea-md-shell-grid.css?inline';
import { ResizeController } from './resize-controller.js';
import { argbFromHex, TonalPalette, Scheme, hexFromArgb, Hct } from '@materialx/material-color-utilities';
import { PolyfeaMdThemeControl, type Theme } from './polyfea-md-theme-control.js';
import { provide } from '@lit/context';
import { localeLoadersContext, LocalizationRegistry } from './localization';
import { targetLocales } from './generated/locale-codes';

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
@customElement('polyfea-md-shell')
export class PolyfeaMdShell extends LitElement {
  static styles = [unsafeCSS(grid), unsafeCSS(styles)];

  /**
   * The name of the application displayed in the top bar. This is only shown
   * if the `app-shell-title` context area is empty.
   */
  @property({ attribute: 'application-headline' }) applicationHeadline: string = 'Polyfea Shell';

  /**
   * If set to true, the menu button on the right side of the top bar will be hidden.
   */
  @property({ type: Boolean, attribute: 'topbar-more-disabled' }) topbarMoreDisabled: boolean = false;

  /**
   * If set to true, the navigation drawer will be hidden in all screen resolutions.
   */
  @property({ type: Boolean, attribute: 'drawer-disabled' }) drawerDisabled: boolean = false;

  /**
   * Determines whether the close button in the navigation drawer is hidden.
   */
  @property({ type: Boolean, attribute: 'drawer-close-disabled' }) drawerCloseDisabled: boolean = false;

  /**
   * If set to true, the navigation rail will be hidden in all screen resolutions.
   */
  @property({ type: Boolean, attribute: 'rail-disabled' }) railDisabled: boolean = false;

  /**
   * If set to true, the navigation bar will be hidden in all screen resolutions.
   */
  @property({ type: Boolean, attribute: 'navigation-disabled' }) navigationDisabled: boolean = false;

  /** Variant of the topbar. See [Top App Bar](https://m3.material.io/components/top-app-bar/overview) documentation. */
  @property({ attribute: 'topbar-variant' }) topbarVariant: 'centered' | 'small' | 'medium' | 'large' = 'centered';

  /** Small media size breakpoint in rem. */
  @property({ type: Number, attribute: 'small-breakpoint-rem' }) smallBreakpointRem: number = 40;

  /** Medium media size breakpoint in rem. */
  @property({ type: Number, attribute: 'medium-breakpoint-rem' }) mediumBreakpointRem: number = 80;

  /** theme primary color in hex rgb format */
  @property({ attribute: 'theme-primary-color' }) themePrimaryColor: string = '';

  /** theme secondary color in hex rgb format */
  @property({ attribute: 'theme-secondary-color' }) themeSecondaryColor: string = '';

  /** theme tertiary color in hex rgb format */
  @property({ attribute: 'theme-tertiary-color' }) themeTertiaryColor: string = '';

  /** theme error color in hex rgb format */
  @property({ type: String, attribute: 'theme-error-color' }) themeErrorColor: string = '';

  /** theme brand font family */
  @property({ type: String, attribute: 'theme-brand-font' }) themeBrandFont: string = "'Roboto Slab', serif";
  /** theme plain font family */
  @property({ type: String, attribute: 'theme-plain-font' }) themePlainFont: string = "'Roboto Flex', Roboto, sans-serif";

  /** scaling multiplier for default font-size of particular theme roles */
  @property({ type: Number, attribute: 'theme-scale-multiplier' }) themeScaleMultiplier: number = 1;

  /**
   * Controls the visibility of the legibility buttons (font size adjustment, theme toggle) in the top bar menu.
   */
  @property({ type: Boolean, attribute: 'theme-menu' }) themeMenu: boolean = false;

  /** URL to locales base path from where to load extra localization files (e.g. '/locales'). Locales are expected to be in <locale>.js files.
   * These locales may overload built-in localizations that are otherwise registered in the context `locales-loaders`.
   */
  @property({ type: String, attribute: 'locales-path' }) localesPath: string = '';

  /** List of locales to load extra localization files for. */
  @property({ type: Array, attribute: 'locales' }) locales: string[] = [];

  /** If set to true, a locale selection menu will be displayed in more action menu*/
  @property({ type: Boolean, attribute: 'locale-menu' }) localeMenu: boolean = false;

  @state() private _drawerOpen: boolean = true;
  @state() private _scrolled: boolean = false;

  @provide({ context: localeLoadersContext })
  _localeRegistry = new LocalizationRegistry();

  #resizeController = new ResizeController(this);
  #currentTheme: Theme | null = null;

  constructor() {
    super();
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    query.addEventListener('change', this.#onThemeChanged.bind(this));
  }

  #drawerClosedHandler() {
    this.#openDrawer(false);
  }

  #drawerOpenedHandler() {
    this.#openDrawer(true);
  }

  connectedCallback() {
    super.connectedCallback();

    const drawerClosed = localStorage.getItem('drawerOpen');
    this._drawerOpen = drawerClosed === 'true';
    this.#currentTheme = PolyfeaMdThemeControl.loadTheme();

    this._localeRegistry.configureLocalization(this.locales?.length ? this.locales : [...targetLocales], this.localesPath);
    this.addEventListener('drawer-closed', this.#drawerClosedHandler.bind(this));
    this.addEventListener('drawer-opened', this.#drawerOpenedHandler.bind(this));
    this.addEventListener('theme-changed', this.#onThemeChanged.bind(this));

    this._localeRegistry.setLocale(this.#currentTheme?.locale || '');
  }

  disconnectedCallback() {
    this.removeEventListener('drawer-closed', this.#drawerClosedHandler.bind(this));
    this.removeEventListener('drawer-opened', this.#drawerOpenedHandler.bind(this));
    this.removeEventListener('theme-changed', this.#onThemeChanged.bind(this));
    super.disconnectedCallback();
  }

  attributeChangedCallback(name: string, _old: string | null, value: string | null): void {
    super.attributeChangedCallback(name, _old, value);
    if (name === 'small-breakpoint-rem') {
      this.#resizeController.setMediaBreakpoints(this.smallBreakpointRem || 40, this.mediumBreakpointRem || 80);
    } else if (name === 'medium-breakpoint-rem') {
      this.#resizeController.setMediaBreakpoints(this.smallBreakpointRem || 40, this.mediumBreakpointRem || 80);
    }
  }

  #onThemeChanged(e: Event) {
    if(e instanceof MediaQueryListEvent) {
      //media query event
      const theme = PolyfeaMdThemeControl.loadTheme();
      if (theme.followSystemTheme) {
        theme.isDark = e.matches;
        e = new CustomEvent<Theme>('theme-changed', { detail: theme }); 
      } else {
        return; // ignore as user preference has priority
      }
    }
    const event = e as CustomEvent<Theme>;
    if (event.detail.locale && event.detail.locale !== this.#currentTheme?.locale) {
      this._localeRegistry.setLocale(event.detail.locale || '');
    }
    if (event.detail.isDark !== this.#currentTheme?.isDark || event.detail.scale !== this.#currentTheme?.scale) {
      this.requestUpdate();
    }
    this.#currentTheme = event.detail;
  }

  #openDrawer(open: boolean) {
    this._drawerOpen = open;
    localStorage.setItem('drawer-open', this._drawerOpen ? 'true' : 'false');
  }

  get #railDisabled() {
    return this.railDisabled || this.#resizeController.mediaSize === 'small';
  }

  get #drawerDisabled() {
    return this.drawerDisabled || this.#resizeController.mediaSize === 'small';
  }

  get #pageClass() {
    let cls = this.#resizeController.mediaSize;
    cls += this.#currentTheme?.isDark ? ' dark' : ' light';
    if (!this.#drawerDisabled) {
      cls += ' drawer' + (this._drawerOpen ? '-open' : '-closed');
    } else {
      cls += ' drawer-disabled';
    }
    if (!this.#railDisabled && (this.#drawerDisabled || !this._drawerOpen)) {
      cls += ' rail';
    }

    if (this.#railDisabled) {
      cls += ' rail-disabled';
    }

    if (!this.navigationDisabled && this.#drawerDisabled && this.#railDisabled) {
      cls += ' navigation';
    }

    if (this.navigationDisabled) {
      cls += ' navigation-disabled';
    }
    return cls;
  }

  render() {
    return html`
      ${this.#renderDesignTokens()}
      <page class=${this.#pageClass} size=${this.#resizeController.mediaSize} theme=${this.#currentTheme?.isDark ? 'dark' : 'light'}>
        ${this.#renderTopBar()}

        <main @scroll=${(ev: Event) => (this._scrolled = (ev.target as HTMLElement).scrollTop > 0)}>
          <polyfea-context name="main-content">
            <slot></slot>
          </polyfea-context>
        </main>

        ${this.#renderNavigation()} ${this.#renderRail()} ${this.#renderDrawer()}
      </page>
    `;
  }

  #renderTopBar() {
    const showTopbarDrawerIcon = this.#railDisabled && !this.#drawerDisabled && !this._drawerOpen;
    return html` <topbar class=${this._scrolled ? 'scrolled' : ''} ?more-actions-disabled=${this.topbarMoreDisabled} ?scrolled=${this._scrolled} >
      <polyfea-md-topbar headline=${this.applicationHeadline} leading-icon=${showTopbarDrawerIcon ? 'drawer' : 'none'} variant=${this.topbarVariant}>
        <polyfea-context name="topbar-leading-icon" take="1">
          <slot slot="leading" name="topbar-leading"></slot>
        </polyfea-context>
        <polyfea-context name="topbar-trailing-icon" take="1">
          <slot slot="trailing" name="topbar-trailing"></slot>
        </polyfea-context>
        <div class="topbar-menu" slot="menu">
          <polyfea-context name="topbar-menu-items">
            <slot name="topbar-menu"></slot>
          </polyfea-context>
          ${this.themeMenu
            ? html`
                <polyfea-md-theme-control variant="menu-item" control="text-increase"></polyfea-md-theme-control>
                <polyfea-md-theme-control variant="menu-item" control="text-decrease"></polyfea-md-theme-control>
                <polyfea-md-theme-control variant="menu-item" control="reset-font"></polyfea-md-theme-control>
                <polyfea-md-theme-control variant="menu-item" control="theme-toggle"></polyfea-md-theme-control>
              `
            : nothing}
          ${this.localeMenu 
            ? html`
            <md-sub-menu>
              <polyfea-md-locale-menu  control="locale-select" .locales=${this.locales}></polyfea-md-locale-menu>
            </md-sub-menu>
            ` 
            : ''
          }
        </div>
      </polyfea-md-topbar>
    </topbar>`;
  }

  #renderNavigation() {
    if (this.navigationDisabled) {
      return nothing;
    }
    return html`
      <navigation>
        <polyfea-md-navigation-bar>
          <polyfea-context name="navigation-content" take="5">
            <slot name="navigation"></slot>
          </polyfea-context>
        </polyfea-md-navigation-bar>
      </navigation>
    `;
  }

  #renderRail() {
    if (this.railDisabled) {
      return nothing;
    }
    return html`
      <rail>
        <polyfea-md-rail ?drawerDisabled=${this.drawerDisabled}>
          <polyfea-context name="rail-primary-action" take="1">
            <slot name="primary-action" slot="primary-action"></slot>
          </polyfea-context>
          <polyfea-context name="rail-content" take="7">
            <slot name="rail"></slot>
          </polyfea-context>
        </polyfea-md-rail>
      </rail>
    `;
  }

  #renderDrawer() {
    if (this.drawerDisabled) {
      return nothing;
    }
    return html`
      <drawer
        class="menu"
        ?open=${this._drawerOpen}
        @click=${() => {
          if (this.#resizeController.mediaSize === 'medium') {
            this.#openDrawer(false);
          }
        }}
      >
        <polyfea-md-drawer ?close-disabled=${this.drawerCloseDisabled || !this._drawerOpen}>
          <polyfea-context name="drawer-content">
            <slot name="drawer"></slot>
          </polyfea-context>
        </polyfea-md-drawer>
      </drawer>
    `;
  }

  #renderDesignTokens() {
    return html`<style>
      ${this.#themeVariant().isDark ? '/* dark theme */' : '/* light theme */'}
      :host {
        ${this.#applyColorTokens()}
        ${this.#applyDesignTokens()}
      }
    </style>`;
  }

  #themeVariant(): Theme {
    return { ...PolyfeaMdThemeControl.loadTheme(), ...this.#currentTheme };
  }

  #applyColorTokens() {
    const pPalette = TonalPalette.fromInt(argbFromHex(this.themePrimaryColor || '#415F91')); // Default primary blue
    const sPalette = TonalPalette.fromInt(argbFromHex(this.themeSecondaryColor || '#565F71')); // Default secondary gray
    const tPalette = TonalPalette.fromInt(argbFromHex(this.themeTertiaryColor || '#705575')); // Default tertiary purple
    const ePalette = TonalPalette.fromInt(argbFromHex(this.themeErrorColor || '#B3261E')); // Default error red

    
const primaryInt = argbFromHex(this.themePrimaryColor || '#415F91');
const primaryHct = Hct.fromInt(primaryInt);
const nPalette = TonalPalette.fromHueAndChroma(primaryHct.hue, 6);
const nvPalette = TonalPalette.fromHueAndChroma(primaryHct.hue, 8);
    const corePalette = {
      a1: pPalette,
      a2: sPalette,
      a3: tPalette,
      n1: nPalette,
      n2: nvPalette,
      error: ePalette,
    };
    const isDark = this.#themeVariant().isDark;
    const scheme = isDark ? Scheme.darkFromCorePalette(corePalette) : Scheme.lightFromCorePalette(corePalette);

    const tones = isDark
      ? {
          dim: 6,
          default: 6,
          bright: 24,
          containerLowest: 4,
          containerLow: 10,
          container: 12,
          containerHigh: 17,
          containerHighest: 22,
        }
      : {
          dim: 87,
          default: 98,
          bright: 98,
          containerLowest: 100,
          containerLow: 96,
          container: 94,
          containerHigh: 92,
          containerHighest: 90,
        };
    let tokens = '';

    tokens += `--md-sys-color-surface-dim: ${hexFromArgb(nPalette.tone(tones.dim))};\n`;
    tokens += `--md-sys-color-surface-bright: ${hexFromArgb(nPalette.tone(tones.bright))};\n`;
    tokens += `--md-sys-color-surface-container-lowest: ${hexFromArgb(nPalette.tone(tones.containerLowest))};\n`;
    tokens += `--md-sys-color-surface-container-low: ${hexFromArgb(nPalette.tone(tones.containerLow))};\n`;
    tokens += `--md-sys-color-surface-container: ${hexFromArgb(nPalette.tone(tones.container))};\n`;
    tokens += `--md-sys-color-surface-container-high: ${hexFromArgb(nPalette.tone(tones.containerHigh))};\n`;
    tokens += `--md-sys-color-surface-container-highest: ${hexFromArgb(nPalette.tone(tones.containerHighest))};\n`;

    for (const [key, value] of Object.entries(scheme.toJSON())) {
      const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const color = hexFromArgb(value);
      tokens += `--md-sys-color-${token}: ${color};\n`;
    }
    return tokens;
  }

  #applyDesignTokens(): string {
    const typescale: Record<
      string,
      {
        lineHeight: number;
        size: number;
        weight: number;
        tracking: number;
        brandFont: boolean;
      }
    > = {
      'display-large': { size: 57, lineHeight: 64, weight: 400, tracking: -0.25, brandFont: true },
      'display-medium': { size: 45, lineHeight: 52, weight: 400, tracking: 0, brandFont: true },
      'display-small': { size: 36, lineHeight: 44, weight: 400, tracking: 0, brandFont: true },

      'headline-large': { size: 32, lineHeight: 40, weight: 400, tracking: 0, brandFont: true },
      'headline-medium': { size: 28, lineHeight: 36, weight: 400, tracking: 0, brandFont: true },
      'headline-small': { size: 24, lineHeight: 32, weight: 400, tracking: 0, brandFont: true },

      'title-large': { size: 22, lineHeight: 28, weight: 400, tracking: 0, brandFont: true },
      'title-medium': { size: 16, lineHeight: 24, weight: 500, tracking: 0.15, brandFont: false },
      'title-small': { size: 14, lineHeight: 20, weight: 500, tracking: 0.1, brandFont: false },

      'label-large': { size: 14, lineHeight: 20, weight: 500, tracking: 0.1, brandFont: false },
      'label-medium': { size: 12, lineHeight: 16, weight: 500, tracking: 0.5, brandFont: false },
      'label-small': { size: 11, lineHeight: 16, weight: 500, tracking: 0.5, brandFont: false },

      'body-large': { size: 16, lineHeight: 24, weight: 400, tracking: 0.5, brandFont: false },
      'body-medium': { size: 14, lineHeight: 20, weight: 400, tracking: 0.25, brandFont: false },
      'body-small': { size: 12, lineHeight: 16, weight: 400, tracking: 0.4, brandFont: false },
    };

    let tokens = '';
    tokens += `--md-ref-typeface-brand: ${this.themeBrandFont || "'Roboto Slab', serif"};\n`;
    tokens += `--md-ref-typeface-plain: ${this.themePlainFont || "'Roboto Flex', Roboto, sans-serif"};\n`;
    const scaleMultiplier = ((this.themeScaleMultiplier || 1.0) * (this.#themeVariant().scale || 1.0)) / 16.0; // convert to rem
    const rem = (num: number) => Math.round((num * scaleMultiplier + Number.EPSILON) * 10000) / 10000 + 'rem';
    tokens +=
      Object.entries(typescale)
        .map(
          ([role, specs]) =>
            `--md-sys-typescale-${role}-font: var(--md-ref-typeface-${specs.brandFont ? 'brand' : 'plain'});\n` +
            `--md-sys-typescale-${role}-line-height: ${rem(specs.lineHeight)};\n` +
            `--md-sys-typescale-${role}-size: ${rem(specs.size)};\n` +
            `--md-sys-typescale-${role}-weight: ${specs.weight.toString()};\n` +
            `--md-sys-typescale-${role}-tracking: ${rem(specs.tracking)};` +
            `--md-sys-typescale-${role}: var(--md-sys-typescale-${role}-weight)  var(--md-sys-typescale-${role}-size)/var(--md-sys-typescale-${role}-line-height) var(--md-sys-typescale-${role}-font);`,
        )
        .join('\n') + '\n';

    const shapes = {
      'corner-none': 0,
      'corner-extra-small': 4,
      'corner-small': 8,
      'corner-medium': 12,
      'corner-large': 16,
      'corner-extra-large': 28,
      'corner-full': 9999,
    };

    return (
      tokens +
      Object.entries(shapes)
        .map(([role, value]) => {
          let cssValue: string;

          if (value === 9999) {
            cssValue = '9999px'; // "Pill" shape in px,
          } else {
            cssValue = `${value * scaleMultiplier}rem`;
          }

          return `--md-sys-shape-${role}: ${cssValue};`;
        })
        .join('\n')
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-shell': PolyfeaMdShell;
  }
}
