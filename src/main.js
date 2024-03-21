import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'


const app = createApp(App)

// app.use(router)

app.mount('#app')

const sanitize = (text) => {
  return text.replace(/<[^>]*>/g, '').replace(/&(nbsp|#160|ensp|emsp|thinsp);/g, ' ')
}

new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination],
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

});

/**
 * Convertit une chaîne de caractères en un format valide pour une URL.
 *
 * @param {string} title - La chaîne de caractères à convertir.
 * @returns {string} La chaîne de caractères convertie.
 */
const urlify = (title) => {
  const sanitizedTitle = typeof title === 'string' ? title : ''
  const urlifiedTitle = sanitizedTitle
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s]+/g, '-')
    .toLowerCase()

  return urlifiedTitle
}

app.config.globalProperties.$urlify = urlify;
app.config.globalProperties.$sanitize = sanitize;