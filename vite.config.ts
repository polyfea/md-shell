// vite.config.ts
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

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
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        elements: resolve(__dirname, 'src/elements.ts') 
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
  }
});