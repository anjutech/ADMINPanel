import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,  // Increase the limit to 1000 kB (1 MB)
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split node_modules packages into separate chunks
          if (id.includes('node_modules')) {
            return id.split('node_modules/')[1].split('/')[0]; // Split by package name
          }
        },
      },
    },
  },
});
