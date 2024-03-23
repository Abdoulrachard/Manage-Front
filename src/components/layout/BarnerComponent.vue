<script setup>

  defineProps({
  bannerClass: String,
})
</script>
<template>
  <div class="section">

    <div class="banner herobanner-embed herobanner-embed--full">
      <div class="banner-content">
        <div  :class="['banner-image', bannerClass]"></div>
        <a href="#content-section" class="navbar-wrapper__cta">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 70vh;
}

.banner-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.navbar-wrapper__cta {
  display: flex;
  width: 28px;
  height: 80px;
  align-items: center;
  border-bottom-width: 0;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
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

@media (max-width: 60.5625em) {
  .banner {
    height: 50vh;
  }
}
</style>

  