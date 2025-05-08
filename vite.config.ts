import react from '@vitejs/plugin-react';
import browserslistToEsbuild from 'browserslist-to-esbuild';
import { defineConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import vitals from 'vite-vitals';

export default defineConfig({
  // depending on your application, base can also be "/"
  base: '',
  plugins: [
    react(),
    viteTsconfigPaths(),
    vitals({
      // Tracking ID (required) { string }
      trackingID: 'UA-XXXXXXXX-X',
      // // Event Category (optional) { string }
      eventCategory: 'Vite Vitals',
      // Debug (optional) { boolean }
      debug: false,
    }),
  ],
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
  build: {
    // --> ["chrome79", "edge92", "firefox91", "safari13.1"]
    target: browserslistToEsbuild([ '>0.2%', 'not dead', 'not op_mini all' ]),
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or "modern"
      },
    },
  },
});
