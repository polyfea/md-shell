import path from 'node:path';

import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'node:path';
import dts from 'vite-plugin-dts';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

const dirname = typeof (globalThis as any).__dirname !== 'undefined' ? (globalThis as any).__dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      strictOutput: true,
      entryRoot: 'src',
    }),

    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/flag-icons',
          dest: 'assets' 
        },
        {
          src: 'node_modules/@fontsource-variable/roboto-flex/files',
          dest: 'assets/roboto-flex'
        },
        {
          src: 'node_modules/@fontsource-variable/roboto-flex/full.css',
          dest: 'assets/roboto-flex'
        },
        {
          src: 'node_modules/@fontsource-variable/roboto-slab/files',
          dest: 'assets/roboto-slab'
        },
        {
          src: 'node_modules/@fontsource-variable/roboto-slab/index.css',
          dest: 'assets/roboto-slab'
        },
        {
          src: 'node_modules/@fontsource-variable/material-symbols-outlined/files',
          dest: 'assets/material-symbols-outlined'
        },
        {
          src: 'node_modules/@fontsource-variable/material-symbols-outlined/full.css',
          dest: 'assets/material-symbols-outlined'
        },
        {
          src: 'src/fonts.css',
          dest: 'assets'
        }


      ]
    })
  ],
  optimizeDeps: {
    include: [
      '@material/web/menu/menu.js',
      '@material/web/menu/menu-item',
      '@material/web/icon/icon',
      '@material/web/iconbutton/icon-button',
      '@material/web/ripple/ripple',
      '@material/web/elevation/elevation',
      'storybook/internal/preview-api'
    ]
  },
  build: {
    lib: {
      entry: {
        index: resolve(dirname, 'src/index.ts'),
        elements: resolve(dirname, 'src/elements.ts') 
      },
      name: 'PolyfeaMdShell',
      fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        /^lit/,
        /^@lit\/reactive-element/,
        /^@lit\/localize/,
        /^@lit\/context/,
        /^@material\/web/
      ], 
      output: [
        {
          format: 'es',
          entryFileNames: '[name].js',
          dir: 'dist',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'es',
          entryFileNames: '[name].min.mjs',
          dir: 'dist',
          plugins: []
        }
      ]
    }
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
    reporters: ['junit', 'verbose'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'cobertura'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/.{git,temp}/**', '**/{vite,vitest}/**', '**/tests/', '.storybook/', 'coverage/', '**/mock*'],
      watermarks: {
        statements: [90, 100],
      },
      thresholds: {
        lines: 100,
        statements: 100,
      },
    },
    outputFile: {
      junit: './coverage/junit-report.xml',
    },
  },
});