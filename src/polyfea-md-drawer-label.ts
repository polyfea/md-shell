import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { loc } from "./localization";

/** 
 * A label component for use in Material Design drawers.
 * 
 * @slot - additional content of the label, or the headline if the `headline` property is not used 
 **/
@customElement('polyfea-md-drawer-label')
export class PolyfeaMdDrawerLabel extends LitElement {
    static styles = css`
      :host {
        display: block;
        font: var(--md-sys-typescale-title-medium, 800 0.85rem / 1.25rem 'Roboto Flex', Roboto, sans-serif);
        letter-spacing: var(--md-sys-typescale-title-medium-letter-spacing, 0.00625rem);
        padding-left: 1.25rem;
        color: var(--md-sys-color-on-surface-variant);
      }
  `;

  /** The headline of the label. May be empty if slot is used*/
  @property({attribute: 'headline'}) headline: string = '';

  /** The localization ID for the headline. Used with `lit-localize` */
  @property({attribute: 'headline-localized-id'}) headlineLocalizedId: string = '';

  render() {
    return html`
      ${loc(this.headline, this.headlineLocalizedId)}
      <slot></slot>
    `;
  }
}