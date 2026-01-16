import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

if (!globalThis.customElements.get('md-elevation')) {
  import('@material/web/elevation/elevation.js');
}

/**
 * A navigation bar component, typically used at the bottom of the screen on mobile devices.
 *
 * @slot - This slot is for the navigation items.
 *    * `polyfea-md-app`: Set its 'context' property to "navigation-content" to use it as a navigation item.
 */
@customElement('polyfea-md-navigation-bar')
export class PolyfeaMdNavigationBar extends LitElement {
  render() {
    return html`
      <md-elevation></md-elevation>
      <slot></slot>
    `;
  }

  static styles = css`
    :host {
      position: relative;
      display: flex;
      flex-direction: row;
      gap: 0.75rem;
      width: 100%;
      height: 100%;
      max-height: 5rem;
      align-content: space-around;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      padding: 0.75rem;
      background-color: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      --md-elevation-level: 2;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-navigation-bar': PolyfeaMdNavigationBar;
  }
}
