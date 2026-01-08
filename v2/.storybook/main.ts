import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    "../tests/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",    
  ],
  docs: {
    // @ts-ignore: Types mismatch
    autodocs: 'tag',
  },
  framework: "@storybook/web-components-vite",
  staticDirs: ['./static'],
};
export default config;