import { LitElement } from 'lit';
/**
 * A navigation bar component, typically used at the bottom of the screen on mobile devices.
 *
 * @slot - This slot is for the navigation items.
 *    * `polyfea-md-app`: Set its 'context' property to "navigation-content" to use it as a navigation item.
 */
export declare class PolyfeaMdNavigationBar extends LitElement {
    render(): import('lit-html').TemplateResult<1>;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-navigation-bar': PolyfeaMdNavigationBar;
    }
}
