<script setup>
import axios from 'axios';

import constants from '@/constants';
import HeaderComponent from '../layout/HeaderComponent.vue';
import FooterComponent from '../layout/FooterComponent.vue';
</script>

<template>
    <section>
        <section>
            <HeaderComponent/>
        </section>
        <section>
            <div class="banner herobanner-embed herobanner-embed--full">
                <div class="banner-image">
                    <img :src="`${constants.STORAGE_URL}/actualities/covers/${ actualities?.cover_path }`"
                        :alt="actualities?.title">
                </div>
            </div>
        </section>
        <section>
            <div class="container  block">
                <h1>{{ actualities?.title }}</h1>
                <h2 class="h5 mrgt0 mrgb">{{ actualities?.created_at }} · {{ actualities?.category.name }}</h2>
                <p v-html="actualities?.description"></p>
            </div>
        </section>
        <section>
            <div class="block container  ">
                <div class=" ">
                    <div v-if="additionalImages.length === 1" class="additional-images row">
                        <div class="col-ms-6 col-md-12">
                            <div class="block__item">
                                <div class="responsive-object  embed-responsive-16by9">
                                    <img :src="`${constants.STORAGE_URL}/actualities/additional_images/${additionalImages[0].path}`"
                                        alt="Image supplémentaire" class="embed-responsive__item">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="additionalImages.length > 1 && additionalImages.length === 3"
                        class="additional-images row">
                        <div v-for="(image, index) in additionalImages" :key="index" class="col-ms-6 col-md-4 ok">
                            <div class="block__item">
                                <div class="responsive-object  embed-responsive-16by9">
                                    <img :src="`${constants.STORAGE_URL}/actualities/additional_images/${image.path}`"
                                        alt="Image supplémentaire" class="embed-responsive__item">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="additionalImages.length > 1" class="additional-images row">
                        <div v-for="(image, index) in additionalImages" :key="index" class="col-ms-6 col-md-6 ok">
                            <div class="block__item">
                                <div class="responsive-object  embed-responsive-16by9">
                                    <img :src="`${constants.STORAGE_URL}/actualities/additional_images/${image.path}`"
                                        alt="Image supplémentaire" class="embed-responsive__item">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>

                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container mrgt">
                <RouterLink to="/actualities" class="inline-flex align-items-center ">
                    <i class="fa-solid fa-arrow-left" style="margin-right: 3px;"></i>
                    <span class="text-bold ">Retour àux Actualités</span>
                </RouterLink>
            </div>
        </section>
        <section>
            <FooterComponent/>
        </section>
    </section>
</template>
<script>
export default {
  data() {
    return {
      actualities: null,
      additionalImages: []
    }
  },
  methods: {

  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`${constants.BASE_URL}/actuality/${id}`)
      .then(response => {
        const data = response.data.data;
          this.actualities = data
          if (this.actualities.additional_images) {
            this.additionalImages = this.actualities.additional_images;
            }
      })
      .catch(response => console.error(response.data)) 
  },

}

</script>
<style scoped>
 .ok{
        margin-top: 20px !important;
    }
.container {
    padding-right: 30px;
    padding-left: 30px;
    margin-bottom: 50px;
    width: 100%;
    max-width: 100%;
}
.text-bold{
    font-weight: 600;
}
.block {
    padding-bottom: 72px;
}
h1, .h1 {
    font-size: 2.2222222222rem;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-weight: bold !important;
    max-width: 800px;
    margin: 1.414em 0 .5em;
    font-weight: inherit;
    line-height: 1.2;
}
p {
    max-width: 800px;
    margin-top: 0;
    margin-bottom: 24px;
    font-size: 17px;
    font-weight: 500;
}
.mrgb {
    margin-bottom: 24px !important;
    margin-top: 0 !important;
}

a {
border-bottom: 1px solid #8d8d8d;
    transition: border-bottom-color .3s ease-in;
    text-decoration: none;
    color: #1d1d1d;
}
a {
    background-color: rgba(0, 0, 0, 0);
    -webkit-text-decoration-skip: objects;
}
.embed-responsive__item{
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border: 0;
}
.responsive-object {
    position: relative;
}
.embed-responsive-16by9 {
    padding-bottom: 56.25%;
}
.banner-image {
  position: relative;
  overflow: hidden; 
  /* height: 65vh; */
  width: 100%;
  height: 550px; /* Définissez ici la hauteur désirée pour votre bannière */
  overflow: hidden; 
}

.banner-image img {
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  
}

@media (max-width: 767px) {
    .container {
        padding-right: 15px;
        padding-left: 15px;
    }

    .block {
        padding-bottom: 30px;
    }
    .row{
        gap: 10px ;
    }
    .block__label{
    margin-top: .2rem;
    
}
.banner-mg {
    height: 200px;
  }
}
</style>