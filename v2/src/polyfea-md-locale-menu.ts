import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

// Import Material Design komponentov
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import { MdMenu } from '@material/web/menu/menu.js';
import { PolyfeaMdThemeControl, type Theme } from './polyfea-md-theme-control';
import { LocalizationRegistry } from './localization';
import { str } from '@lit/localize/internal/str-tag';
import { msg } from '@lit/localize';

/**
 * Mapovanie ISO kódov jazykov (lit-localize) na ISO kódy krajín (flag-icons)
 */
const LOCALE_TO_COUNTRY: Record<string, string> = {
  'cs': 'cz',
  'en': 'gb',
  'en-US': 'us',
  'en-GB': 'gb',
  'sk': 'sk',
  'de': 'de',
  'hu': 'hu',
  'pl': 'pl',
  'uk': 'ua',
  'es': 'es',
};

@customElement('polyfea-md-locale-menu')
export class PolyfeaMdLocaleMenu extends LitElement {
  /**
   * list of supported locales
   */
  @property({ type: Array }) locales: string[] = ['en'];

  /**
   * current selected locale
   */
  @property({ type: String, attribute: 'current-locale', reflect: true }) currentLocale = 'en';

  /**
   * Path to the flag-icons CSS file
   */
  @property({ type: String, attribute: 'flag-icons-path' })
  flagIconsPath = './assets/flag-icons/css/flag-icons.min.css';

  /**
   * Reference to the menu element for programmatic opening/closing
   */
  @query('md-menu') private menu!: MdMenu;
  @state() private menuOpen = false;

  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .flag-icon {
      border-radius: 2px;
      margin-right: 0.75rem;
      font-size: 1.125rem;
      line-height: 1.125rem;
    }

    .menu-content {
      display: flex;
      align-items: center;
      min-width: 150px;
    }

    .lang-name {
      font-family: var(--md-sys-typescale-label-large-font, sans-serif);
      font-size: var(--md-sys-typescale-label-large-size, 14px);
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    const theme = PolyfeaMdThemeControl.loadTheme();
    if (theme.locale) {
      this.currentLocale = theme.locale;
    } else {
      let browserLocales = navigator.languages || [navigator.language];
      this.currentLocale = LocalizationRegistry.resolveSupportedLocale(browserLocales, new Set(this.locales));
    }
  }

  render() {
    const countryCode = this.#getCountryCode(this.currentLocale);
    const langName = this.#getDisplayNames(this.currentLocale);
    return html`
      <link rel="stylesheet" href="${this.flagIconsPath}" />
      <md-menu-item
        @click=${() => (this.menu.open = !this.menu.open)}
        id="locale-anchor"
        keep-open
        aria-haspopup="menu"
        aria-expanded="${this.menuOpen ? 'true' : 'false'}"
        aria-controls="locale-menu"
        aria-label=${msg(str`Change language, currently ${langName}`, { id: 'polyfea.change-language-label' })}
      >
        <div slot="headline" class="menu-content">
          <span class="flag-icon fi fi-${countryCode}"></span>
          <span class="lang-name">${langName}</span>
        </div>
        <md-icon slot="end">arrow_right</md-icon>
      </md-menu-item>
      <md-menu id="locale-menu" anchor="locale-anchor" .open="${this.menuOpen}"> ${map(this.locales, locale => this.#renderMenuItem(locale))} </md-menu>
    `;
  }

  #renderMenuItem(locale: string) {
    const isSelected = this.currentLocale === locale;
    const countryCode = this.#getCountryCode(locale);
    const langName = this.#getDisplayNames(locale);

    return html`
      <md-menu-item @click="${() => this.#handleLocaleSelect(locale)}" ?selected="${isSelected}" role="menuitemradio" aria-checked=${isSelected ? 'true' : 'false'}>
        <div slot="headline" class="menu-content">
          <span class="flag-icon fi fi-${countryCode}"></span>
          <span class="lang-name">${langName}</span>
        </div>
      </md-menu-item>
    `;
  }

  #handleLocaleSelect(locale: string) {
    this.menuOpen = false;
    if (this.currentLocale === locale) return;
    this.currentLocale = locale;

    const theme = { ...PolyfeaMdThemeControl.loadTheme(), locale };
    localStorage.setItem('theme', JSON.stringify(theme));

    this.dispatchEvent(
      new CustomEvent<Theme>('theme-changed', {
        detail: theme,
        bubbles: true,
        composed: true,
      }),
    );
  }

  #getDisplayNames(locale: string): string {
    let name: string | undefined;
    try {
      name = new Intl.DisplayNames([locale], { type: 'language' }).of(locale);
      name = name ? name.charAt(0).toUpperCase() + name.slice(1) : locale;
    } catch (e) {}
    return name || locale;
  }

  #getCountryCode(locale: string): string {
    if (LOCALE_TO_COUNTRY[locale]) {
      return LOCALE_TO_COUNTRY[locale];
    }
    if (locale.includes('-')) {
      return locale.split('-')[1].toLowerCase();
    }
    return 'un';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-locale-menu': PolyfeaMdLocaleMenu;
  }
}
