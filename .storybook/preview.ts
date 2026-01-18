import type { Preview } from '@storybook/web-components-vite';
import { within as withinShadow } from "shadow-dom-testing-library";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";
import  {PolyfeaContext} from "@polyfea/core";

import "../src/localization";

PolyfeaContext.define();
setCustomElementsManifest(customElements);

const unsafeCustomElements = window.customElements.define;

window.customElements.define = (name: string, constructor: CustomElementConstructor, options?: ElementDefinitionOptions) => {
  if (!window.customElements.get(name)) {
    unsafeCustomElements.call(window.customElements, name, constructor, options);
  }
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },

    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduction', 
          [
            "Overview",
            "Usage",
            "Theming",
            'Localization',
            "Deployment",
          ],
          'Custom elements', 
          [
            'polyfea-md-shell',
            'polyfea-md-apps',
            'polyfea-md-app',
          ],
          '*'
        ],
        
        // Voliteľné: Ignorovať locale pri triedení
        locales: 'en-US', 
      },
    },
  },
};

export default preview;
export type ShadowQueries = ReturnType<typeof withinShadow>;

declare module "storybook/internal/csf" {
  interface Canvas extends ShadowQueries {}
}
