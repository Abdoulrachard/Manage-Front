import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite' 
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
    server: {
      port: 5173,
      cors: {
        origin: 'http://localhost:5173', // Remplacez par l'origine de votre application Vue.js
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
    },
})

