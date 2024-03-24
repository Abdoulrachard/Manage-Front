<script setup>
import HeaderComponentVue from "@/components/layout/HeaderComponent.vue";
import FooterComponentVue from "@/components/layout/FooterComponent.vue";

import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
    const router = useRouter();

    watch(router.currentRoute, (to) => {
      document.title = getTitleFromRoute(to);
    });


    function getTitleFromRoute(route) {
      switch (route.path) {
        case '/apropos':
          return 'À propos · CCHE';
        case '/emplois':
          return 'Emplois ouverts CCHE · CCHE';
        case '/contact':
          return "Contact | Bureau d'architecture | CCHE · CCHE";
        case '/actualities':
          return "Actualités de CCHE · CCHE";
        case '/projects':
          return "Projets | Bureau d'architecture | CCHE · CCHE";
        case '/equipes':
          return "Équipe | Bureau d'architecture | CCHE · CCHE";
        case '/apropos/urbanisme':
          return "Urbanisme · CCHE";
        case '/apropos/architecture':
          return "Architecture · CCHE";
        case '/apropos/interieur':
          return "Interieur · CCHE";
        case '/apropos/design':
          return "Design · CCHE";
          case '/apropos/realisation':
          return "Realisation · CCHE";
        default:
          return "Bureau d’architecture | Lausanne, Nyon, Genève, la Vallée de Joux, Zürich et Porto | CCHE · CCHE";
      }
    }

    onMounted(() => {
      document.title = getTitleFromRoute(router.currentRoute.value);
    });
    const route = useRouter();

const isHomePage = () => {
  return route.currentRoute.value.path === '/';
}



</script>

<template>
  <div>
    <HeaderComponentVue v-if="!isHomePage"/>
    <RouterView />
    <FooterComponentVue v-if="!isHomePage"/>
  </div>
</template>

<style>

</style>

