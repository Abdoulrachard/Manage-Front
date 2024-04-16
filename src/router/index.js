import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AproposView from '../views/Apropos/AproposView.vue'
import EmploiView from '../views/Emplois/EmploiView.vue'
import ContactView from '../views/Contact/ContactView.vue'
import UrbanismeView from '@/views/Apropos/UrbanismeView.vue'
import ArchitectureView from '@/views/Apropos/ArchitectureView.vue'
import InterieurView from '@/views/Apropos/InterieurView.vue'
import DesignView from '@/views/Apropos/DesignView.vue'
import RealView from '@/views/Apropos/RealView.vue'
import NotFoundView from '../views/NotFound/NotFoundView.vue'
import ActualitiesView from '../views/actualities/ActualitiesViews.vue'
import ActualitiesShowView from '../views/actualities/ActualitiesShowView.vue'
import ProjectsShowView from '../views/projects/ProjectsShowView.vue'
// import EquipesShowView from '../views/equipes/EquipesShowView.vue'
import ProjectsView from '../views/projects/ProjectsView.vue'
import EquipesView from '../views/equipes/EquipesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/actualities',
      name: 'actualities',
      component: ActualitiesView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/equipes',
      name: 'equipes',
      component: EquipesView
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
      path: '/apropos/interieur',
      name: 'interieur',
      component: InterieurView
    },
    {
      path: '/apropos/design',
      name: 'design',
      component: DesignView
    },
    {
      path: '/apropos/realisation',
      name: 'realisation',
      component: RealView
    },
    {
      path: '/actuality/:id',
      name: 'actuality.show',
      component: ActualitiesShowView
    },
    // {
    //   path: '/equipe/:id',
    //   name: 'equipe.show',
    //   component: EquipesShowView
    // },
    {
      path: '/project/:id',
      name: 'project.show',
      component: ProjectsShowView
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
