import type { Preview } from '@storybook/web-components-vite';
import { within as withinShadow } from "shadow-dom-testing-library";
import { setCustomElementsManifest } from "@storybook/web-components";
import customElements from "../custom-elements.json";
import  {PolyfeaContext} from "@polyfea/core";
import "./fonts.css";
import "../src/localization";

PolyfeaContext.define();
setCustomElementsManifest(customElements);

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
  },
};

export default preview;
export type ShadowQueries = ReturnType<typeof withinShadow>;

declare module "storybook/internal/csf" {
  interface Canvas extends ShadowQueries {}
}
