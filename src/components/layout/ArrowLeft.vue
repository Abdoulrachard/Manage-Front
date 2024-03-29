<script setup>

</script>
<template>
    <div class="container">
        <RouterLink to="/projects" class="text-dry d-flex flex-column align-items-center pdgb">
                <span class="text-bold">Voir plus</span>
                <span><i class="fas fa-arrow-right"></i></span>
        </RouterLink>
    </div>
</template>
<style scoped>
a{
    text-decoration: none;
    color: #000000;
}
    .pdgb {
    padding-bottom: 50px !important;
}

.text-bold {
    font-weight: bold;
}
</style>