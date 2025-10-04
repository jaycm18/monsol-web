import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
          animations: ['framer-motion']
        }
      }
    },
    // Optimoi kuvat ja muut assetit
    assetsInlineLimit: 4096, // Inline pienet tiedostot base64:nä
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimoi kuvien lataus
  assetsInclude: ['**/*.webp'],
  // Preload critical resources
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  }
})
