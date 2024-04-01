<script setup>
import axios from 'axios';

import constants from '@/constants';

import { RouterLink } from 'vue-router';
</script>

<template>
    <section>

        <section>
            <div class="banner herobanner-embed herobanner-embed--full">
                <div class="banner-image">
                    <img :src="`${constants.STORAGE_URL}/projects/covers/${ projects?.cover }`" :alt="projects?.title">
                </div>
            </div>
        </section>
        <section>
            <div class="container  block">
                <div class="row ">
                    <div class="col-sm-6 col-md-6 first-content">
                        <h1>{{ projects?.project_name }}</h1>
                        <h2 class="h5 mrgt0 mrgb">{{ projects?.title }}</h2>
                        <p v-html="projects?.descriptions"></p>
                    </div>
                    <div class="col-sm-6 col-md-6 second-content">
                        <div class="svg">
                            <ul class="sectors-list list-inline mrgb ">
                                <li>
                                    <RouterLink to="/apropos/urbanisme"
                                        class=" flex-column align-items-center text-dry">
                                        <svg class=" icon icon--urbanisme sectors-list__icon icon--disabled"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M5.204 0 4.133 1.88l-4 6.976L0 9.1V24h24V11.426l-.645-.302-.247-.117V2.942H12.505v6.226l-2.362 1.125V9.116l-.129-.234L6.232 1.9 5.204 0zM1.186 9.371 5.18 2.398l3.773 6.973v4.534l-1.698-.917-.589-.317-.592.312-2.346 1.237-2.268 1.192-.274.146V9.371zm12.503-5.32h8.238v6.39l-5.523-2.624-.538-.25-.54.25-1.637.784V4.05zm-3.546 10.497v-3.015L15.866 8.8l6.945 3.302v3.614H12.32l-2.178-1.17zM1.192 16.82l.854-.453 2.274-1.193 2.34-1.231 5.341 2.877h10.81v6.072H1.192V16.82z" />
                                        </svg>
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/apropos/architecture"
                                        class=" flex-column align-items-center text-dry">
                                        <svg class="icon icon--urbanisme sectors-list__icon "
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M11.98 0z" />
                                            <path fill="transparent" d="M5.09 17.08h4.49v5.74H5.09z" />
                                            <path fill="transparent"
                                                d="M16.62 4.35 11.98 1.4 1.19 8.3v14.52H3.9V15.9h6.87v6.92h12.04V8.3l-1.7-1.08-4.49-2.87z" />
                                            <path
                                                d="m23.46 7.3-1.7-1.07-4.5-2.87L12.62.41 12 0l-.65.41L.54 7.31 0 7.65V24h24V7.65ZM9.58 22.82H5.09v-5.74h4.49Zm13.23 0h-12V15.9H3.9v6.92H1.19V8.3L12 1.4l4.64 2.95 4.49 2.87 1.7 1.08Z" />
                                        </svg>
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/apropos/interieur"
                                        class="flex flex-column align-items-center text-dry">
                                        <svg class="icon icon--urbanisme sectors-list__icon icon--disabled"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M19.6 0v24H4.24V0Zm-1.26 1.17H5.5v21.66h9.56l-7.27-2V3.52L18.34 1.2Zm0 1.24-9.29 2V20l9.29 2.55Zm-8.24 8.52h2.72v1.18H10.1Z" />
                                        </svg>
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/apropos/design"
                                        class="flex flex-column align-items-center text-dry">
                                        <svg class="icon icon--urbanisme sectors-list__icon icon--disabled"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M3 0v24h11.46v-9.2h8.7V9.2h-8.7V0Zm1.29 1.19h8.88v8H6.6v5.61h6.57v8H4.29Zm3.59 9.2h14v3.22h-14Z" />
                                        </svg>
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/apropos/realisation"
                                        class="flex flex-column align-items-center text-dry">
                                        <svg class="icon icon--urbanisme sectors-list__icon icon--disabled"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path fill="transparent"
                                                d="M14.9 8.89V5.66H1.25v3.23H14.9zM7.92 10.08H1.25v3.12h6.67v-3.12zM9.08 1.19h13.66v3.23H9.08zM16.15 5.66h6.59V8.9h-6.59zM1.25 14.39v8.4h21.49v-8.4H1.25zM14.9 10.08H9.17v3.12h13.57v-3.11H14.9v-.01z" />
                                            <path
                                                d="M7.82 0v4.46H0V24h24V0Zm1.26 1.19h13.66v3.23H9.08Zm13.66 4.47V8.9h-6.59V5.66Zm-21.49 0H14.9v3.23H1.25Zm0 4.42h6.67v3.12H1.25Zm21.49 12.71H1.25v-8.4h21.49Zm0-9.59H9.17v-3.12h13.57Z" />
                                        </svg>
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                        <div id="section">
                            <section class="mrgb-" v-if="projects?.year" >
                                <p class="text-small text-darker mrg0">Année</p>
                                <p data-block-key="m7h6o">{{ projects?.year }}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.city">
                                <p class="text-small text-darker mrg0">Ville</p>
                                <p data-block-key="qx5bs">{{ projects.city }}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.maitre_ouvre"  >
                                <p class="text-small text-darker mrg0">Maître de l'ouvrage</p>
                                <p data-block-key="m7h6o">{{ projects.maitre_ouvre }}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.typologie">
                                <p class="text-small text-darker mrg0">Typologie</p>
                                <p data-block-key="pwb6j">{{ projects.typologie }}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.programme">
                                <p class="text-small text-darker mrg0">Programme</p>
                                <p data-block-key="6gf62">{{ projects.programme }}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.procedure">
                                <p class="text-small text-darker mrg0">Procédure</p>
                                <p data-block-key="qx5bs">{{ projects.procedure }}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.surface">
                                <p class="text-small text-darker mrg0">Surface (SBP)</p>
                                <p data-block-key="qx5bs">{{ projects.surface }} m<sup>2</sup></p>
                            </section>
                            <section class="mrgb-" v-if="projects?.volume">
                                <p class="text-small text-darker mrg0">Volume (SIA)</p>
                                <p data-block-key="qx5bs">{{ projects?.volume }} m<sup>3</sup></p>
                            </section>
                            <section class="mrgb-" v-if="projects?.realisation">
                                <p class="text-small text-darker mrg0">Réalisation</p>
                                <p data-block-key="qx5bs">{{projects?.realisation}}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.developer">
                                <p class="text-small text-darker mrg0">Develloper par</p>
                                <p data-block-key="qx5bs">{{projects?.developer}}</p>
                            </section>
                            <section class="mrgb-" v-if="projects?.signaletique">
                                <p class="text-small text-darker mrg0">Signaletique</p>
                                <p data-block-key="qx5bs">{{projects.signaletique}}</p>
                            </section>
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section>
            <div class="block container  ">
                <div class=" ">
                    <div v-if="additionalImages.length === 1" class="additional-images row">
                        <div class="col-ms-6 col-md-12">
                            <div class="block__item">
                                <div class="responsive-object  embed-responsive-16by9">
                                    <img :src="`${constants.STORAGE_URL}/projects/additional_images/${additionalImages[0].path}`"
                                        alt="Image supplémentaire" class="embed-responsive__item">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="additionalImages.length > 1" class="additional-images add row ">
                        <div v-for="(image, index) in additionalImages" :key="index" class="col-ms-6 col-md-6 ">
                            <div class="block__item">
                                <div class="responsive-object  embed-responsive-16by9">
                                    <img :src="`${constants.STORAGE_URL}/projects/additional_images/${image.path}`"
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
                <RouterLink to="/projects" class="inline-flex align-items-center ">
                    <i class="fa-solid fa-arrow-left" style="margin-right: 3px;"></i>
                    <span class="text-bold ">Retour aux Projets</span>
                </RouterLink>
            </div>
        </section>
    </section>
</template>
<script>
export default {
  data() {
    return {
      projects: null,
      additionalImages: []
    }
  },
  methods: {

  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`${constants.BASE_URL}/project/${id}`)
      .then(response => {
        const data = response.data.data;
          this.projects = data
          if (this.projects.additional_images) {
            this.additionalImages = this.projects.additional_images;
            }
      })
      .catch(response => console.error(response.data)) 
  },

}

</script>
<style scoped>
.container {
    padding-right: 30px;
    padding-left: 30px;
    margin-bottom: 50px;
    margin-top: 60px;
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
    /* margin: 1.414em 0 .5em; */
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
/* border-bottom: 1px solid #8d8d8d; */
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
  top:50%;
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
  .second-content{
    padding-left: 20px !important ;
}
}
.list-inline {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.list, .list-stacked, .list-inline {
    margin: 0;
    padding: 0;
    list-style: none;
}
.mrgb {
    margin-bottom: 24px !important;
}
.list-inline>li:first-child {
    padding-left: 0;
}
.list-inline>li {
    padding: 0 12px;
}
.sectors-list__icon {
    width: 27px;
    height: 27px;
    vertical-align: -7px;
}
svg:not(:root) {
    overflow: hidden;
}
.icon--disabled {
    fill: #bcbcbc;
}
.icon {
    display: inline-block;
    vertical-align: middle;
    pointer-events: none;
    will-change: transform;
}
.second-content{
    padding-left: 12.5% ;
}
.add{
    row-gap: 10px;
}
.text-darker {
    color: #606060;
}

.mrg0 {
    margin: 0 !important;
}
.text-small {
    font-size: .888888rem;
}
</style>