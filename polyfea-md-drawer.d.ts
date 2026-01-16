import { LitElement } from 'lit';
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
export declare class PolyfeaMdDrawer extends LitElement {
    #private;
    /**
     * By default, the drawer includes a close button. If this property is set to true, the close button will be hidden.
     * This can be useful when the drawer is used for navigation and a close button is unnecessary.
     */
    closeDisabled: boolean;
    render(): import('lit-html').TemplateResult<1>;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-drawer': PolyfeaMdDrawer;
    }
}
