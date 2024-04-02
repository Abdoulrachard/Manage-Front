<script setup>
import constants from '@/constants';


</script>
<template>
  <RouterLink
    class="linkCard" :to="{ name: 'actuality.show', params: { id: data.id }}">
    <div class="card border-0 rounded-0 bg-custom">
      <img :src="`${constants.STORAGE_URL}/actualities/covers/${ data?.cover_path }`" class="card-img-top rounded-0 zoom-on-hover" :alt="data?.title" />
      <div class="card-body card-info">
        <p class="categories">{{ data?.category.name }}</p>
        <p class="date">{{ data?.created_at}}</p>
        <h4 class="card-title title">{{ data?.title }}</h4>
        <p class="card-text text" ref="description" v-html="truncateDescription(data?.description)"></p>
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    data: Object
  },
  mounted() {
    this.truncateDescription();
  },
  methods: {
    truncateDescription(description) {
      const maxHeight = 250;
      const container = document.createElement('div');
      container.innerHTML = description;

      if (container.clientHeight > maxHeight) {
        let truncatedContent = description.substr(0, container.scrollHeight);
        // Tronquer le contenu et ajouter des points de suspension
        truncatedContent = truncatedContent.substr(0, truncatedContent.lastIndexOf(' ')) + '...';
        return truncatedContent;
      } else {
        return description;
      }
    }
  }
};
</script>

<style scoped>
.bg-custom {
  background-color: #f5f5f5 !important ;
  margin-bottom: 10px !important;
}
.card-info {
    padding: 14px 14px 25px;
    position: relative;
    background-color: #f5f5f5;
}
.categories {
    margin-bottom: 7px;
    font-weight: 600;
}
.title {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 1.2222222222rem;
    font-weight: bold;
}

.date {
    color: #606060;
    margin-top: 0;
    margin-bottom: 14px;
    font-size: .888888rem;
    font-weight: 500;
    

}
.text {
    margin-bottom: 0;
    font-size: 17px;
    font-weight: 500;
}
.linkCard {
  text-decoration: none;
  color: inherit;
}
.linkCard:hover {
  color: inherit;
}

.card {
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover .zoom-on-hover {
  transform: scale(1.05);
}

.card-img-top {
  transition: transform 0.3s ease !important;
}
</style>
