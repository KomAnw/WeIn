import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      overlay: true,
    },
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
