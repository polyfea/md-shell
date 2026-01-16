import { LitElement } from 'lit';
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
export declare class PolyfeaMdRail extends LitElement {
    #private;
    /** The rail show drawer open icon by default. Set this property to true to hide it */
    drawerDisabled: boolean;
    /** The alignment of the navigation actions. */
    contentPosition: 'top' | 'middle' | 'bottom';
    render(): import('lit-html').TemplateResult<1>;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-rail': PolyfeaMdRail;
    }
}
