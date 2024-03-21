<script setup>
  import router from '@/router';
  import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log(route.)
</script>
<template>
    <div class="banner jarallax jarallax--video herobanner-embed herobanner-embed--full">
      <div id="jarallax-container-0" class="jarallax-img">
        <iframe
          :src="video"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          class="herobanner-embed--full__item"
        ></iframe>
        <div class="herobanner-embed--full__thumbnail">
          <picture class=""></picture>
        </div>
      </div>
      <a href="#content-section" class="navbar-wrapper__cta">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#ffffff"
            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
          />
        </svg>
      </a>
    </div>
  </template>
  
  <style scoped>
  .herobanner-embed--full {
    position: relative;
    overflow: hidden;
    height: 70vh;
  }
  
  .herobanner-embed--full__item,
  .herobanner-embed--full__thumbnail {
    width: 100vw;
    min-width: 177.77vh;
    height: 56.25vw;
    min-height: 100vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .jarallax-img {
    position: relative;
  }
  
  .image-responsive__item {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .navbar-wrapper__cta {
    display: flex;
    width: 28px;
    height: 80px;
    align-items: center;
    border-bottom-width: 0;
    position: relative;
    top: 70%;
    left: 50%;
    margin-left: -18px;
    z-index: 2000;
    color: #fff;
    animation-name: bounce;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }
  @media (max-width: 60.5625em){
    .herobanner-embed--full {
        height: 57vh;
    }
  }
  </style>
  