import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Plugin to handle Pyodide's conditional Node.js imports
    {
      name: 'pyodide-node-stub',
      resolveId(id) {
        // Stub out Node.js modules that Pyodide conditionally imports
        if (id === 'node-fetch' || id === 'vm') {
          return id;
        }
        return null;
      },
      load(id) {
        // Return empty module for Node.js-only imports (they won't be used in browser)
        if (id === 'node-fetch' || id === 'vm') {
          return 'export default {};';
        }
        return null;
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['pyodide'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
})

