import { msg } from '@lit/localize';
import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import { customElementSafe, importMdIconButtonSafely, importMdIconSafely } from './custom-element-safe';

importMdIconButtonSafely();
importMdIconSafely();

/**
 * A navigation rail component, typically used on the side of the screen on medium to large devices.
 * 
 * @slot - This slot is for the main content of the rail, typically a list of navigation actions. 
 * Use `polyfea-md-app` with attribute `context="rail-content"`.
 * 
 * @slot primary-action - This slot is for the primary action's FAB of the rail.
 * 
 * @fires drawer-opened - Raised when the drawer open icon is clicked indicating the user want to open the drawer.
 */
@customElementSafe('polyfea-md-rail')
export class PolyfeaMdRail extends LitElement {
  
  /** The rail show drawer open icon by default. Set this property to true to hide it */
  @property({ type: Boolean, attribute: 'drawer-disabled' }) drawerDisabled: boolean = false;

  /** The alignment of the navigation actions. */
  @property({ attribute: 'content-position' }) contentPosition: 'top' | 'middle' | 'bottom' = 'top';

  render() {
    return html`
      <div class="primary-action">
        ${this.drawerDisabled
          ? ''
          : html`
              <md-icon-button class="drawer-button" @click=${this.#dispatchDrawerOpened} aria-label=${msg('open drawer', { id: 'polyfea.open-drawer' })}>
                <md-icon>menu</md-icon>
              </md-icon-button>
            `}
        <slot name="primary-action"></slot>
      </div>

      <div class="content">
        ${this.contentPosition === 'middle' || this.contentPosition === 'bottom'
          ? html`<div class="glue"></div>`
          : ''}
        <slot></slot>
        ${this.contentPosition === 'middle' || this.contentPosition === 'top'
          ? html`<div class="glue"></div>`
          : ''}
      </div>
    `;
  }

  #dispatchDrawerOpened() {
    this.dispatchEvent(new Event('drawer-opened', { bubbles: true, composed: true }));
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 100%;
      min-width: 80px;
      box-sizing: border-box;
      padding: 1rem 0;
      background-color: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
    }

    .primary-action {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      width: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: 0.75rem;
      overflow-y: auto;
    }

    .glue {
      flex-grow: 1;
    }
    
    /* Hide scrollbar for cleaner look */
    .content::-webkit-scrollbar {
      display: none;
    }
    .content {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-rail': PolyfeaMdRail;
  }
}
