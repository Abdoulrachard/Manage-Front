<script setup>
import ProjectCard from './ProjectCard.vue'
import axios from 'axios';
import constants from '@/constants';


</script>

<template>
  <div class="container-fluidy">
    <div class="row masonry">
      <div class="col col-margin" v-for="t in totalCols" :key="t">
        <div v-for="(card, k) in getUniqueCards(t)" :key="k">
          <ProjectCard :data="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max_projects: 19,
      projects: [],
      totalCols: 4,
      totalRows: 1
    }
  },
  methods: {
    getUniqueCards: function (col = 1) {
      const offset = (col - 1) * this.totalRows;
      const limit = col * this.totalRows;
      const cardsInColumn = [];

      for (let i = offset; i < Math.min(limit, this.projects.length); i++) {
        cardsInColumn.push(this.projects[i]);
      }

      return cardsInColumn;
    }
  },
  mounted() {
    
    axios.get(`${constants.BASE_URL}/project`)
      .then(response => {

        const data = response.data.data;
        if (data) {
          this.projects = data.slice(0, this.max_projects);
        }
        this.totalRows = Math.ceil(this.projects.length / this.totalCols);

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
  transition:grid-template-columns .2s ease-in-out
}
.col-margin{
  padding-left: 4px;
  padding-right: 4px;
  height: auto;
}
.container-fluidy {
  margin: 2% !important;
  overflow: hidden;
}
@media (max-width: 389px) {
.masonry {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

</style>
