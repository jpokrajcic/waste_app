// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // optional: allows skipping imports for `describe`, `test`, etc.
    setupFiles: ['./src/test/setup.js'], // optional: path to setup file for global configurations
  },
});
