<script setup>
    defineProps({
        data : Object
    });
  

</script>
<template>
    <a  :href="data?.link" class="linkCard">
      <div class="card border-0 rounded-0 bg-custom mb-3 " style="">
        <img :src="data?.image" class="card-img-top rounded-0 zoom-on-hover" :alt="data?.imageAlt ">
        <div class="card-body card-info">
            <p class="fw-bold categories" >{{ data?.categories }}</p>
            <p class="date ">{{ data?.date }}</p>
            <h4 class="card-title title ">{{ data?.title }}</h4>
            <p class="card-text text">{{ data?.content }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </a>
</template>

<script>
    export default {

    }
</script>
<style >


  .bg-custom{
    background-color:#f5f5f5 !important ;
  }
  .card-info{
    padding:  14px 14px 35px;
  }
  .categories{
    margin-bottom: 7px;
  }
  .title{
    margin-bottom: 14px !important;
    margin-top: 0;
    font-size: 1.30rem;
    line-height: 1.3;
    font-weight: 600;
  }
 
  .date{
    color: #606060;
    font-size: .88rem;
  }
  .text{
    margin-bottom:14px;
    margin-top: 0;
    font-weight: 500;
  }
  .linkCard{
    text-decoration: none;
    color: inherit;
  }
  .linkCard:hover{
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
  transition: transform 0.3s ease;
}
</style>