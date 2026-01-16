declare global {
  interface CustomElementRegistry {
    /**
     * Register lazy custom element. The element module will be loaded when first used in DOM.
     *
     * @param tagName tag name of the custom element
     * @param loadFn either URL string to the module to import dynamically
     *   or function returning a Promise resolving when the module is loaded (typically dynamic import).
     *   Use lambda function if you intend to use relative path.
     */
    defineLazy(tagName: string, loadFn: string | (() => Promise<unknown>)): void;
  }
}

const elements = [
    'polyfea-md-app',
    'polyfea-md-apps',
    'polyfea-md-drawer',
    'polyfea-md-drawer-label',
    'polyfea-md-locale-menu',
    'polyfea-md-navigation-bar', 
    'polyfea-md-rail', 
    'polyfea-md-shell', 
    'polyfea-md-theme-control', 
    'polyfea-md-topbar', 
];
if (customElements.defineLazy !== undefined) {
  for (const el of elements) {
    customElements.defineLazy(el, await import(`./${el}.js`));
  }
} else {
  for (const el of elements) {
    import(`./${el}.js`);
  }
}
