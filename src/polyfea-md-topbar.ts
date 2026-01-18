import { msg, updateWhenLocaleChanges } from '@lit/localize';
import { LitElement, html, css, nothing } from 'lit';
import {  property, query } from 'lit/decorators.js';
import { customElementSafe, importMdIconButtonSafely, importMdIconSafely, importMdMenuSafely } from './custom-element-safe';

importMdIconButtonSafely();
importMdIconSafely();
importMdMenuSafely();

/** An element for top application bars following Material Design guidelines.
 * 
 * @slot headline - The headline of the top bar. If not provided, the value of the `headline` property is shown.
 * @slot leading - The leading icon or button of the top bar. If not provided, the content is controlled by the `leading-icon` property.
 * @slot trailing - The trailing actions - icons or buttons of the top bar,
 * @slot menu - The menu items of the "more actions" menu. Shall be elements of type `<md-menu-item>`.
 * 
 * @fires drawer-opened - Emitted when clicking on the drawer leading icon button. Refers to parent to handle side navigation.
 * @fires back - Emitted when clicking on the back leading icon button.
 */
@customElementSafe('polyfea-md-topbar')
export class PolyfeaMdTopbar extends LitElement {

  /** Text of the headline */
  @property() headline: string = "Polyfea";

  /** Icon to show in the leading position of the top bar if the `leading` slot is left empty. 
   * Possible values are:
   * - `none` - No icon is shown.
   * - `drawer` - A menu icon is shown that opens the drawer.
   * - `back` - A back icon is shown that emits a `back` event.
   */
  @property({ attribute: 'leading-icon' }) leadingIcon: "none" | "drawer" | "back" = "drawer";

  /** Variant of the applications top bar - changes the layout and size of the top bar. */
  @property() variant: "centered" | "small" | "medium" | "large" = "centered";

  /** Controls if right side icon with more actions menu is rendered */
  @property({ type: Boolean, attribute: 'more-actions-disabled' }) moreActionsDisabled: boolean = false;

  @query('md-menu') private menuEl!: any;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="${this.variant}-wrapper">
        <slot name="leading" class="leading">
            ${this.#renderLeadingFallback()}
        </slot>
        
        <div class="headline">
          <slot name="headline"><h1>${this.headline}</h1></slot>
        </div>

        ${this.variant === "centered"
          ? this.#renderMoreActions()
          : html`
            <div class="trailing">
              <slot name="trailing"></slot>
            </div>
            ${this.#renderMoreActions()}
          `
        }
      </div>
    `;
  }

  #renderLeadingFallback() {
    if (this.leadingIcon === "back") {
      return html`
        <md-icon-button class="back-button" @click=${this.#dispatchBack} aria-label=${msg("back", { id: "polyfea.navigate-back" })}>
          <md-icon>arrow_back</md-icon>
        </md-icon-button>
      `;
    } else if (this.leadingIcon === "drawer") {
      return html`
        <md-icon-button class="drawer-button" @click=${this.#dispatchDrawerOpened} aria-label=${msg("open drawer", { id: "polyfea.open-drawer" })}>
          <md-icon>menu</md-icon>
        </md-icon-button>
      `;
    }
    return html`<div></div>`;
  }

  #renderMoreActions() {
    return html`
      <div class="menu">
        ${this.moreActionsDisabled
          ? nothing
          : html`
              <md-icon-button id="topbar-menu-anchor" @click=${this.#toggleMenu} aria-label=${msg("more actions", { id: "polyfea.more-actions" })}>
                <md-icon>more_vert</md-icon>
              </md-icon-button>
              <md-menu anchor="topbar-menu-anchor" anchor-corner="end-end" menu-corner="start-end" has-overflow>
                <slot name="menu"></slot>
              </md-menu>
            `
        }
      </div>
    `;
  }

  #toggleMenu() {
    if (this.menuEl) {
      this.menuEl.open = !this.menuEl.open;
    }
  }

  #dispatchDrawerOpened() {
    this.dispatchEvent(new Event('drawer-opened', { bubbles: true, composed: true }));
  }

  #dispatchBack() {
    this.dispatchEvent(new Event('back', { bubbles: true, composed: true }));
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: min-content;
      background-color: inherit;
      color: inherit;
      font: inherit;
      box-sizing: border-box;
    }

    * {
      box-sizing: border-box;
    }

    .centered-wrapper,
    .small-wrapper {
      display: grid;
      height: 4rem;
      grid-template-columns: min-content 1fr auto 3rem;
      grid-template-areas: "leading headline trailing menu";
      padding: 1.25rem 0 0.25rem 0;
      transition: ease-in-out 0.2s;
      align-items: center;
    }

    .centered-wrapper .headline {
      text-align: center;
    }

    .medium-wrapper {
      display: grid;
      height: 7rem;
      grid-template-columns: 3rem 1fr 3rem;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "leading trailing menu"
        "headline headline headline";
      padding: 1.25rem 0 1.75rem 0;
      transition: ease-in-out 0.2s;
    }

    .large-wrapper {
      display: grid;
      height: 9.5rem;
      grid-template-columns: 3rem 1fr 3rem;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "leading trailing menu"
        "headline headline headline";
      padding: 1.25rem 0 1.75rem 0;
      transition: ease-in-out 0.2s;
    }
    
    .leading { 
      grid-area: leading; 
    }
    
    .trailing { 
      grid-area: trailing; 
    }
    
    .menu { 
      grid-area: menu; 
      position: relative; 
      margin-right: 1rem; 
      position: relative;
    }
    
    .headline { 
      grid-area: headline; 
      padding: 0 0.5rem; 
    }

    .menu md-menu {
      min-width: 15rem;
    }

    .headline h1 {
      font: var(--md-sys-typescale-title-large,  800 1.375rem / 1.75rem 'Roboto Flex', Roboto, sans-serif);
      letter-spacing: var(--md-sys-typescale-title-large-font-letter-spacing, 0px);
      text-align: left;
      margin: 0 0;
      padding: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: var(--md-sys-color-on-surface);
    }

    .centered-wrapper .headline h1 {
        text-align: center;
    }
    
    .large-wrapper .headline h1 {
      white-space: initial;
      overflow: auto;
      text-overflow: initial;
    }

    .trailing {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    
    @media (max-width: 53.5rem) {
      .centered-wrapper,
      .small-wrapper {
        grid-template-columns: 4rem 1fr 0 4rem;
      }

      .centered-wrapper .trailing,
      .small-wrapper .trailing {
        display: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-topbar': PolyfeaMdTopbar;
  }
}
