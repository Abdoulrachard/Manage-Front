<script setup>
import ProjectComplete from './ProjectComplete.vue';

   
</script>
<template>
    <div class="container">
        <div class="okay">
            <h3 class="mrg0">Projets</h3>
            <button aria-controls="#collapsible-content-cche-articles-strainer"
                class="text-normal btn btn--default btn--rounded btn--small">
                Filtrer <i class="fa fa-chevron-down"></i>
            </button>
        </div>

    </div>
    <div>
        <ProjectComplete />
    </div>
</template>
<style scoped>
.okay{
    margin-top: 200px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
}
.btn:hover, .btn:focus, .btn:active {
    text-decoration: none;
}

.btn--small {
    line-height: 1;
    padding: 4.3262379212px 7px !important;
    font-size: .888888rem;
    border-radius: 16px !important;
    border: 1px solid #bcbcbc;
}
.container {
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    max-width: 100%;
}
.pdgv{
    margin-top: 100px;
}
h3{
    font-size: 1.4444444444rem;
    font-weight: bold;
}
.mrgb {
    margin-bottom: 14px !important;
}
</style>