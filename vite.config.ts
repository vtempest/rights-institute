import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['globe.gl', 'three']
  },
  resolve: {
    alias: {
      'three/webgpu': 'three/examples/jsm/renderers/webgpu/WebGPURenderer.js',
      'three/tsl': 'three/examples/jsm/nodes/Nodes.js'
    }
  },
  define: {
    global: 'globalThis',
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html'
      },
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash].[ext]'
      }
    }
  },
  esbuild: {
    target: 'esnext'
  },
  publicDir: 'static'
});