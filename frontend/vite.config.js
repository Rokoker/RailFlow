import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
        '/api': {
          target: 'http://localhost:80', // ← порт твоего backend-контейнера
          changeOrigin: true,
          secure: false,
        },
      },
  build: {
    outDir: 'dist'
  }}}
)

