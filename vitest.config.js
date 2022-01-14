import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteInlineComponent from 'vite-plugin-svelte-inline-component';
import path from 'path';
debugger;
export default defineConfig({
  plugins: [
    svelte({ hot: !process.env.VITEST, }),
    svelteInlineComponent(),
  ],
  test: {
    global: true,
    environment: 'jsdom',
    setupFiles: ['./test-setup.js']
  },
  resolve: {
    alias: {
      $lib: path.resolve('./src/lib'),
    },
  },  
});