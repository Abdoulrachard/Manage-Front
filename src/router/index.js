import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AproposView from '../views/Apropos/AproposView.vue'
import EmploiView from '../views/Emplois/EmploiView.vue'
import ContactView from '../views/Contact/ContactView.vue'
import UrbanismeView from '@/views/Apropos/UrbanismeView.vue'
import ArchitectureView from '@/views/Apropos/ArchitectureView.vue'
import NotFoundView from '../views/NotFound/NotFoundView.vue'

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
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/apropos/urbanisme',
      name: 'urbanisme',
      component: UrbanismeView
    },
    {
      path: '/apropos/architecture',
      name: 'architecture',
      component: ArchitectureView
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFoundView
    },
  ]
})

export default router
