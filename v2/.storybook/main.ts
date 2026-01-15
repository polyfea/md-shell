import type { StorybookConfig } from '@storybook/web-components-vite';
import { mergeConfig, ViteDevServer } from 'vite';

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
  staticDirs: [
    './static',
    { 
      from: '../node_modules/flag-icons', 
      to: '/assets/flag-icons' 
    }
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        {
          name: 'custom-mime-type-middleware',
          configureServer(server: ViteDevServer) {
            
            server.middlewares.use((req, res, next) => {
              
              if (req.url === '/polyfea/static-config.json') {
                res.setHeader('Content-Type', 'application/json; charset=utf-8');
              }
              
              next();
            });
          },
        },
      ],
    });
  },
};
export default config;