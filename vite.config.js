import { defineConfig } from 'vite'; 
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  },
  server: {
    cors: {
      origin: 'https://cche-ch.com', // Remplacez par l'origine de votre application Vue.js
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    },
  },
});
// import { fileURLToPath, URL } from 'node:url'
// import { defineConfig } from 'vite' 
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
//   plugins: [
//     vue(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   },
//     server: {
//       cors: {
//         origin: 'https://cche-ch.com', // Remplacez par l'origine de votre application Vue.js
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type', 'Authorization'],
//       },
//     },
// })

