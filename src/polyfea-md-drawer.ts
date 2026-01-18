import { msg } from '@lit/localize/init/install';
import { LitElement, html, css, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { customElementSafe, importMdIconButtonSafely, importMdIconSafely } from './custom-element-safe';

importMdIconButtonSafely();
importMdIconSafely();


/**
 * A navigation drawer component.
 *
 * @slot - This slot is for the main content of the drawer, typically a list of navigation links. It can contain:
 *    * `polyfea-md-drawer-label`: A label separator in the drawer list.
 *    * `polyfea-md-app`: Set its 'context' property to "drawer-content" to use it as a navigation element.
 *    * `md-divider`: A divider in the drawer list.
 *    * other elements that can be used in a navigation drawer.
 * 
 * @fires drawer-closed - Rised when the close button is clicked indicating the user want to close the drawer.
 */
@customElementSafe('polyfea-md-drawer')
export class PolyfeaMdDrawer extends LitElement {
  

  /**
   * By default, the drawer includes a close button. If this property is set to true, the close button will be hidden. 
   * This can be useful when the drawer is used for navigation and a close button is unnecessary.
   */
  @property({ type: Boolean, attribute: 'close-disabled' }) closeDisabled: boolean = false;

  render() {
    return html`
      ${this.closeDisabled
        ? nothing
        : html`
            <div class="close-button-wrapper">
              <md-icon-button class="close-button" @click=${this.#dispatchDrawerClosed} aria-label=${msg('close drawer', { id: 'polyfea.close-drawer' })}>
                <md-icon>close_small</md-icon>
              </md-icon-button>
            </div>
          `}
      <div class="content">
        <slot></slot>
      </div>
    `;
  }

  #dispatchDrawerClosed() {
    this.dispatchEvent(new Event('drawer-closed', { bubbles: true, composed: true }));
  }
  static styles = css`
  :host {
    color: var(--md-sys-color-on-surface);
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    padding: 1rem;
    overflow-y: auto;
    box-sizing: border-box;
    }

    ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
    background-color: var(--highlight-10, rgba(0, 0, 0, 0.1));
    border-radius: 2px;
    }

    ::-webkit-scrollbar-thumb {
    background: var(--highlight-20, rgba(0, 0, 0, 0.2));
    border-radius: 2px;
    }

    .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-content: start;
    justify-items: end;
    }

    .close-button-wrapper {
    display: flex;
    justify-content: flex-end;
  }`
}


declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-drawer': PolyfeaMdDrawer;
  }
}
  
