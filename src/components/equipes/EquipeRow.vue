<script setup>
import EquipeCard from './EquipeCard.vue'
import axios from 'axios';
import constants from '../../constants';
</script>

<template>
    <div class="container-fluidy">
        <div class="row masonry">
            <div v-for="(card, k) in equipes" :key="k" class="col col-margin">
                <EquipeCard :data="card" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      equipes: [],
    }
  },
  methods: {
    
    
  },
  mounted() {
    
    axios.get(`${constants.BASE_URL}/equipe`)
      .then(response => {

        const data = response.data.data;
        if (data) {
          this.equipes = data;
        }

      })
      .catch(response => console.error(response.data))

  },
  setup() { }
}
</script>

<style scoped>
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.col-margin{
  padding-left: 4px;
  padding-right: 4px;
}
.container-fluidy {
  margin: 2% !important;
  overflow: hidden;
}
</style>
