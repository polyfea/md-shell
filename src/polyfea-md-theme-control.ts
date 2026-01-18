import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import { customElementSafe, importMdIconButtonSafely, importMdIconSafely, importMdMenuItemSafely } from './custom-element-safe';


importMdIconButtonSafely();
importMdIconSafely();
importMdMenuItemSafely();

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
@customElementSafe('polyfea-md-theme-control')
export class PolyfeaMdThemeControl extends LitElement {
  /**
   * This property controls the display variant of the theme control. It can be used to render the control
   * as an icon button or a menu item.
   *
   * The "preset" variant doesn't render anything but initializes the theme based on user preferences stored in local storage.
   * Include this in your document to ensure the theme is properly initialized.
   */
  @property() variant: 'button' | 'menu-item' = 'button';

  /**
   * This property specifies which aspect of the theme is controlled by this element.
   */
  @property() control: 'theme-toggle' | 'text-increase' | 'text-decrease' | 'reset-font' = 'theme-toggle';

  @state() private _theme: Theme = { isDark: false, scale: 1.0, followSystemTheme: true};


  static THEME_CHANGED_EVENT = 'polyfea-theme-changed';
  private static _THEME_STORAGE_KEY = '@polyfea/theme';

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this._theme = PolyfeaMdThemeControl.loadTheme();
    // Listen for changes from other controls
    window.addEventListener(PolyfeaMdThemeControl.THEME_CHANGED_EVENT, this.#handleThemeChanged.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener(PolyfeaMdThemeControl.THEME_CHANGED_EVENT, this.#handleThemeChanged.bind(this));
    
    super.disconnectedCallback();
  }

  #handleThemeChanged(event: Event) {
    const customEvent = event as CustomEvent<Theme>;

    if (this._theme.isDark !== customEvent.detail?.isDark || this._theme.scale !== (customEvent.detail?.scale || 1.0)) {
      this._theme = { ...customEvent.detail };
    }
  }
  

  render() {
    let icon = '';
    let label = '';

    switch (this.control) {
      case 'theme-toggle':
        icon = this._theme.isDark ? 'light_mode' : 'dark_mode' ;
        label = this._theme.isDark 
          ?  msg('Switch to Light mode', { id: "polyfea.switch-to-light-theme" }) 
          : msg('Switch to Dark mode', { id: "polyfea.switch-to-dark-theme" });
        break;
      case 'text-increase':
        icon = 'text_increase';
        label = msg('Increase text size', { id: "polyfea.increase-text-size" });
        break;
      case 'text-decrease':
        icon = 'text_decrease';
        label = msg('Decrease text size', { id: "polyfea.decrease-text-size" });
        break;
      case 'reset-font':
        icon = 'text_format';
        label = msg('Reset text size', { id: "polyfea.reset-text-size" });
        break;
    }

    if (this.variant === 'button') {
      return html`
        <md-icon-button @click=${this.#performAction} title=${label} aria-label=${label}>
          <md-icon>${icon}</md-icon>
        </md-icon-button>
      `;
    } else if (this.variant === 'menu-item') {
      return html`
        <md-menu-item @click=${this.#performAction}>
          <md-icon slot="start">${icon}</md-icon>
          <div slot="headline">${label}</div>
        </md-menu-item>
      `;
    }

  }

  static loadTheme(): Theme {
    try {
      const stored = localStorage.getItem(PolyfeaMdThemeControl._THEME_STORAGE_KEY);
      if (stored) {
        let theme =  JSON.parse(stored);
        if ((theme.followSystemTheme  || theme.followSystemTheme === undefined) && window.matchMedia) {
          const query = window.matchMedia('(prefers-color-scheme: dark)');
          theme.isDark = query.matches;
        }
        return Object.assign({scale: 1.0, followSystemTheme: true}, theme);
      }
    } catch (e) {
      // Ignore errors and return default
    }
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = query.matches;
    return { isDark, scale: 1.0, followSystemTheme: true};
  }

  #performAction() {
    let theme = Object.assign({}, this._theme);

    switch (this.control) {
      case 'theme-toggle':
        theme.isDark = !theme.isDark;
        theme.followSystemTheme = false;
        break;
      case 'text-increase':
        theme.scale = (theme.scale || 1.0) * 1.2;
        break;
      case 'text-decrease':
        if ((theme.scale || 1.0) > 0.01) {
          theme.scale = (theme.scale || 1.0) * (1 / 1.2);
        }
        break;
      case 'reset-font':
        theme.scale = 1.0;
        break;
    }

    if (this._theme.isDark != theme.isDark || this._theme.scale != theme.scale) {
      localStorage.setItem(PolyfeaMdThemeControl._THEME_STORAGE_KEY, JSON.stringify(theme));
      this._theme = theme;
      this.dispatchEvent(
        new CustomEvent<Theme>(PolyfeaMdThemeControl.THEME_CHANGED_EVENT, {
          detail:  theme,
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  static styles = css`
    :host {
      display: contents;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-theme-control': PolyfeaMdThemeControl;
  }
}
