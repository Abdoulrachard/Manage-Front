<script setup>
import constants from '@/constants';

// Fonction pour tronquer le texte
const truncateText = (text, maxLength) => {
  if (!text) return '';
  
  // Supprimer les balises HTML
  const strippedText = text.replace(/<[^>]*>/g, '');
  
  // Tronquer le texte
  if (strippedText.length > maxLength) {
    return strippedText.substr(0, maxLength) + '...';
  }
  
  return strippedText;
}
</script>
<template>
  <RouterLink
    class="linkCard" :to="{ name: 'actuality.show', params: { id: data.id }}">
    <div class="card border-0 rounded-0 bg-custom ">
      <img :src="`${constants.STORAGE_URL}/actualities/covers/${ data?.cover_path }`" class="card-img-top rounded-0 zoom-on-hover" :alt="data?.title" />
      <div class="card-body card-info">
        <p class=" categories">{{ data?.category.name }}</p>
        <p class="date">{{ data?.created_at}}</p>
        <h4 class="card-title title">{{ data?.title }}</h4>
        <p  class="card-text text line-clamp-3" v-html="truncateText(data?.description, 100)"></p>
      </div>
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
.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3; /* Limite à 3 lignes */
  text-overflow: ellipsis;
}
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
    /* margin-left:10px ; */
}
.title {
    margin-top: 0;
    margin-bottom: 14px;
    font-size: 1.2222222222rem;
    font-weight: bold;
    /* margin-left:10px ; */

}

.date {
    color: #606060;
    margin-top: 0;
    margin-bottom: 14px;
    font-size: .888888rem;
    font-weight: 500;
    /* margin-left:10px ; */
    

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
@media (max-width: 767px) {
  .line-clamp-3 {
  -webkit-line-clamp: 5; /* Nombre de lignes maximal */
}
}

</style>
