import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig, ViteDevServer } from 'vite';

const config: StorybookConfig = {
  stories: [
    "../tests/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../tests/**/*.mdx"
  ],
  addons: [
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",    
  ],
  docs: {
    // @ts-ignore: Types mismatch
    autodocs: 'tag',
  },
  framework: "@storybook/web-components-vite",
  staticDirs: [
    './static',
    { 
      from: '../node_modules/flag-icons', 
      to: '/assets/flag-icons' 
    }, 
    { 
      from: '../node_modules/@fontsource-variable/roboto-flex',
      to: '/assets/roboto-flex'
    },
    { 
      from: '../node_modules/@fontsource-variable/roboto-slab',
      to: '/assets/roboto-slab'
    },
    { 
      from: '../node_modules/@fontsource-variable/material-symbols-outlined',
      to: '/assets/material-symbols-outlined'
    },
    {
      from: '../src/fonts.css',
      to: '/assets/fonts.css'
    }
  ],
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      base: (configType === 'PRODUCTION'  && (globalThis as any).process?.env?.NODE_ENV !== 'test'? '/md-shell/' : '/'),
    });
  },
};
export default config;