<!-- <script setup>
import actualityDatas from '../BDD'
import ActualityCard from './actualities/ActualityCard.vue'
</script>

<template>
  <div class="container-fluidy">
    <div class="row masonry">
      <div class="col col-margin" v-for="t in totalCols" :key="t">
        <div v-for="(card, k) in getCards(t)" :key="k">
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
    getCards: function (col = 1) {
      const offset = (col - 1) * this.totalRows
      const limit = col * this.totalRows + 1

      return this.actualities.slice(offset, limit)
    }
  },
  mounted() {
    this.actualities = actualityDatas
    this.totalRows = this.actualities?.length / this.totalCols
  },
  setup() {}
}
</script>

<style>
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.container-fluidy {
  margin: 2%;
  overflow: hidden;
}
</style> -->
