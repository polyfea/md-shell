import { LitElement } from 'lit';
/**
 * List of application tiles. This component may be used as  launcher page for additinal applications.
 *
 * @slot - This slot is for the content of the element, typically application tiles.
 * You can use [polyfea-md-app](../polyfea-md-app/readme.md) or any other component.
 * If a context area is specified and available, the slot content is not rendered.
 * Instead, elements provided by the context are displayed.
 */
export declare class PolyfeaMdApps extends LitElement {
    /**
     * name of the [polyfe-context](https://github.com/polyfea/core/blob/main/src/components/polyfea-context/readme.md)
     * element that will be used to render the applications web components.
     */
    applicationsContext: string;
    _transitioning: boolean;
    connectedCallback(): void;
    render(): import('lit-html').TemplateResult<1>;
    static styles: import('lit').CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'polyfea-md-apps': PolyfeaMdApps;
    }
}
