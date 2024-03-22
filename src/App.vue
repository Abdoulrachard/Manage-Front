<script setup>

import FooterComponentVue from "./components/layout/FooterComponent.vue"
import HeaderComponentVue from "./components/layout/HeaderComponent.vue"
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
        default:
          return "Bureau d’architecture | Lausanne, Nyon, Genève, la Vallée de Joux, Zürich et Porto | CCHE · CCHE";
      }
    }

    onMounted(() => {
      document.title = getTitleFromRoute(router.currentRoute.value);
    });




</script>

<template>
  <HeaderComponentVue/>
  <RouterView />
  <FooterComponentVue/>
</template>

<style>

</style>

