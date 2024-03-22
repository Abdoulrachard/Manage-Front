import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AproposView from '../views/Apropos/AproposView.vue'
import EmploiView from '../views/Emplois/EmploiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/apropos',
      name: 'apropos',
      component: AproposView
    },
    {
      path: '/emplois',
      name: 'emplois',
      component: EmploiView
    }
  ]
})

export default router
