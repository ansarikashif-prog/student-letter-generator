import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    strictPort: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2017',
    minify: 'esbuild'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'jspdf']
  }
});
