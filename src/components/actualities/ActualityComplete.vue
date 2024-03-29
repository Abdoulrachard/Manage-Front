<script setup>
import ActualityCard from './ActualityCard.vue'
import axios from 'axios';
import constants from '@/constants';
</script>

<template>
  <div class="container-fluidy">
    <div class="row masonry">
      <div class="col col-margin" v-for="t in totalCols" :key="t">
        <div v-for="(card, k) in getUniqueCards(t)" :key="k">
          <ActualityCard :data="card" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actualities: [],
      totalCols: 4,
      totalRows: 1
    }
  },
  methods: {
    getUniqueCards: function (col = 1) {
      const offset = (col - 1) * this.totalRows;
      const limit = col * this.totalRows;
      const cardsInColumn = [];

      for (let i = offset; i < Math.min(limit, this.actualities.length); i++) {
        cardsInColumn.push(this.actualities[i]);
      }

      return cardsInColumn;
    }
  },
  mounted() {

    axios.get(`${constants.BASE_URL}/actuality`)
      .then(response => {

        const data = response.data.data;
        if (data) {
          this.actualities = data;
        }
        this.totalRows = Math.ceil(this.actualities.length / this.totalCols);

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
  padding-left: 6px;
  padding-right: 6px;
}
.container-fluidy {
  margin: 2% !important;
  overflow: hidden;
}
</style>
