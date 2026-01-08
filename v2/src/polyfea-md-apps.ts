import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';


import styles from './polyfea-md-apps.css?inline';

/**
 * List of application tiles. This component may be used a  launcher page for additinal applications.
 *
 * @slot - This slot is for the content of the element, typically application tiles. 
 * You can use [polyfea-md-app](../polyfea-md-app/readme.md) or any other component. 
 * If a context area is specified and available, the slot content is not rendered. 
 * Instead, elements provided by the context are displayed.
 */
@customElement('polyfea-md-apps')
export class PolyfeaMdApps extends LitElement {
  static styles = unsafeCSS(styles);

  /** 
   * name of the [polyfe-context](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md) 
   * element that will be used to render the applications web components.
   */
  @property({attribute: 'applications-context'}) applicationsContext: string = "applications";

  @state()
  _transitioning: boolean = true;


  connectedCallback(): void {
    super.connectedCallback();
    this._transitioning = true;
  }

  render() {
    if (this._transitioning) {
      setTimeout(() => this._transitioning = false, 10); // Allow time for initial render to apply transition class
    }
    return html`
        <div class=${"wrapper" + (this._transitioning ? " begin-transition" : "" )}>
          <polyfea-context name=${this.applicationsContext} style="display: contents;">
            <slot></slot>
          </polyfea-context>
        </div>
      `;
  }

}


declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-apps': PolyfeaMdApps;
  }
}
