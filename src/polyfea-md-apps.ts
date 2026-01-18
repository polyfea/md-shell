import { LitElement, css, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { customElementSafe } from './custom-element-safe';

/**
 * List of application tiles. This component may be used as  launcher page for additinal applications.
 *
 * @slot - This slot is for the content of the element, typically application tiles.
 * You can use [polyfea-md-app](../polyfea-md-app/readme.md) or any other component.
 * If a context area is specified and available, the slot content is not rendered.
 * Instead, elements provided by the context are displayed.
 */
@customElementSafe('polyfea-md-apps')
export class PolyfeaMdApps extends LitElement {
  /**
   * name of the [polyfe-context](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md)
   * element that will be used to render the applications web components.
   */
  @property({ attribute: 'applications-context' }) applicationsContext: string = 'applications';

  @state()
  _transitioning: boolean = true;

  connectedCallback(): void {
    super.connectedCallback();
    this._transitioning = true;
  }

  render() {
    if (this._transitioning) {
      setTimeout(() => (this._transitioning = false), 10); // Allow time for initial render to apply transition class
    }
    return html`
      <div class=${'wrapper' + (this._transitioning ? ' begin-transition' : '')}>
        <polyfea-context name=${this.applicationsContext} style="display: contents;">
          <slot></slot>
        </polyfea-context>
      </div>
    `;
  }

  static styles = css`
    :host {
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      display: flex;
      padding: 1rem;
    }

    .wrapper {
      box-sizing: border-box;
      height: fit-content;
      padding: 1rem;
      width: 100%;
      margin: 0 auto;
      justify-content: space-evenly;
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
      align-content: start;
      transition: all 0.3s ease-in-out;
      opacity: 1;
    }

    .wrapper.begin-transition {
      opacity: 0;
    }

    * {
      box-sizing: border-box;
      width: 12rem;
      height: 12rem;
    }

    polyfea-context {
      display: contents;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'polyfea-md-apps': PolyfeaMdApps;
  }
}
