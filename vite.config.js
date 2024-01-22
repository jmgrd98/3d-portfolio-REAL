import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
  esbuild: {
    target: 'es2015',
  },
})
