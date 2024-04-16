<script setup>
import constants from '@/constants';




</script>

<template>
    
    <!-- <RouterLink :to="{ name: 'equipe.show', params: { id: data.id }}" class="linkCard"> -->
    <RouterLink to="" class="linkCard">
        <div class="card border-0 rounded-0 bg-custom ">
            <div class="responsive position-relative">
                <img :src="`${constants.STORAGE_URL}/equipes/covers/${data?.cover}`"
                    class="rounded-0 responsive zoom-on-hover" :alt="data?.name" />
                <div class="title-overlay d-flex justify-content-between align-items-end">
                    <div>
                        <h5 v-if="data?.name !== null" class="tile__title line-clamp-2">{{ data?.name }}</h5>
                        <p class="tile__description">{{ data?.posted }}</p>
                    </div>
                    <div>
                        <i class="fa-regular fa-plus"></i>
                    </div>
                </div>
                <div class="tile__gradient"></div>
            </div>
        </div>
    </RouterLink>
    <!-- </RouterLink> -->
    
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style scoped>
.bg-custom {
    background-color: #f5f5f5 !important;
}

.linkCard {
    text-decoration: none;
    color: inherit;
}

.linkCard:hover {
    color: inherit;
}

.card {
    position: relative;
    overflow: hidden ;
    margin-bottom: 12px !important;
}

.responsive {
    position: relative;
    transition: transform 0.3s ease; 
}

.responsive img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    
}

.title-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    color: #fff ;
    z-index: 2000;
}

.title-overlay h5 {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
}

.linkCard:hover .zoom-on-hover {
    transform: scale(1.04);
}

.tile__footer {
    position: absolute;
    right: 14px;
    bottom: 12px;
    left: 14px;
    z-index: 200;
    color: #fff;
}

.tile__title,
.tile__description {
    margin: 0;
}

h5 {
    font-size: 1rem;
    font-weight: bold;
    max-width: 800px;
}
.tile__gradient {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-image: linear-gradient(to top, hsla(56.67deg, 9.09%, 38.82%, 0.12) 0%, hsla(56.67deg, 9.09%, 38.82%, 0.113) 5.3%, hsla(56.67deg, 9.09%, 38.82%, 0.105) 11%, hsla(56.67deg, 9.09%, 38.82%, 0.096) 16.8%, hsla(56.67deg, 9.09%, 38.82%, 0.086) 22.9%, hsla(56.67deg, 9.09%, 38.82%, 0.076) 29.3%, hsla(56.67deg, 9.09%, 38.82%, 0.065) 35.8%, hsla(56.67deg, 9.09%, 38.82%, 0.054) 42.5%, hsla(56.67deg, 9.09%, 38.82%, 0.044) 49.3%, hsla(56.67deg, 9.09%, 38.82%, 0.034) 56.3%, hsla(56.67deg, 9.09%, 38.82%, 0.024) 63.4%, hsla(56.67deg, 9.09%, 38.82%, 0.016) 70.6%, hsla(56.67deg, 9.09%, 38.82%, 0.01) 77.9%, hsla(56.67deg, 9.09%, 38.82%, 0.004) 85.2%, hsla(56.67deg, 9.09%, 38.82%, 0.001) 92.6%, hsla(56.67deg, 9.09%, 38.82%, 0) 100%);
    background-blend-mode: multiply;
}
p {
    max-width: 800px;
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 17px;
    font-weight: 500;
}
.tile__description {
    margin-top: 7px;
}
.fa-plus {
    min-width: 25px;
    font-size: 28px;
    margin-bottom: 7px;
    color: #fff;
}
@media (max-width: 767px) {
    /* .responsive  {
       height: 450px;
    }
    .responsive img {
    width: 100%;
    height: 100%; 
    
} */
}
</style>