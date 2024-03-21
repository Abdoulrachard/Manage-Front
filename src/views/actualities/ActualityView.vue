<script setup>
import actualityDatas from '../../BDD'
</script>

<template>
  <h1>{{ actuality.title }}</h1>
  <img :src="actuality.image" alt="">
</template>

<script>
export default {
  data() {
    return {
      actuality: {}
    }
  },
  mounted() {
    const uid = this.$route.params.id
    this.actuality = actualityDatas.filter((elt) => elt.uid == uid)[0]
  }
}
</script>
