import { LitElement } from 'lit';
/**
 * A label component for use in Material Design drawers.
 *
 * @slot - additional content of the label, or the headline if the `headline` property is not used
 **/
export declare class PolyfeaMdDrawerLabel extends LitElement {
    static styles: import('lit').CSSResult;
    /** The headline of the label. May be empty if slot is used*/
    headline: string;
    /** The localization ID for the headline. Used with `lit-localize` */
    headlineLocalizedId: string;
    render(): import('lit-html').TemplateResult<1>;
}
