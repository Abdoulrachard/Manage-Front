
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite' 
import vue from '@vitejs/plugin-vue'

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
      cors: {
        origin: 'https://cche-ch.com', // Remplacez par l'origine de votre application Vue.js
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
      },
    },
})

