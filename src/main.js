import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'


const app = createApp(App)

app.use(router)

app.mount('#app')


new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Pagination],
  autoplay: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

});
function toggleNavbarVisibility(){
  let lastScrollTop = 0;
  const navbarHeight = 90; // Hauteur de votre barre de navigation
  const offsetThreshold = 30; // Seuil de défilement pour réapparition de la barre de navigation
  
  window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop && currentScroll > navbarHeight + offsetThreshold) {
      // Scroll vers le bas
      document.querySelector("nav").style.top = `-${navbarHeight}px`;
    } else if (currentScroll < lastScrollTop && currentScroll < navbarHeight - offsetThreshold) {
      // Scroll vers le haut
      document.querySelector("nav").style.top = "0";
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour gérer le comportement sur les navigateurs mobiles
  });
}
 toggleNavbarVisibility()

