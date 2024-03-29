<script setup>
import constants from "@/constants"


</script>

<template>
    
    <RouterLink  :to="{ name: 'project.show', params: { id: data.id }}" class="linkCard" >
        <div class="card border-0 rounded-0 bg-custom zoom-on-hover">
            <div class="responsive">
                <img :src="`${constants.STORAGE_URL}/projects/covers/${data?.cover}`"
                    class=" rounded-0  responsive" :alt="data?.title" />
            </div>
        <div class="tile__footer"><h5 class="tile__title line-clamp-2">{{ data?.project_name }}</h5></div>

        </div>
    </RouterLink>
    
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
  background-color: #f5f5f5 !important ;
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
  overflow: hidden;
  transition: transform 0.3s ease;
  padding-bottom: 68.25% !important;
}
.responsive{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    transition: transform 0.3s ease !important;
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
.tile__title, .tile__description {
    margin: 0;
}
h5{
    font-size: 1rem;
    font-weight: bold;
    max-width: 800px;
}
</style>