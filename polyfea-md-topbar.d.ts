import { LitElement } from 'lit';
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
export declare class PolyfeaMdTopbar extends LitElement {
    #private;
    /** Text of the headline */
    headline: string;
    /** Icon to show in the leading position of the top bar if the `leading` slot is left empty.
     * Possible values are:
     * - `none` - No icon is shown.
     * - `drawer` - A menu icon is shown that opens the drawer.
     * - `back` - A back icon is shown that emits a `back` event.
     */
    leadingIcon: "none" | "drawer" | "back";
    /** Variant of the applications top bar - changes the layout and size of the top bar. */
    variant: "centered" | "small" | "medium" | "large";
    /** Controls if right side icon with more actions menu is rendered */
    moreActionsDisabled: boolean;
    private menuEl;
    constructor();
    render(): import('lit-html').TemplateResult<1>;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-topbar': PolyfeaMdTopbar;
    }
}
