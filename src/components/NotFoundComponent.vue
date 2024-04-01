<script setup>


</script>
<template>
    <div class="container">
        <img src="./src/assets/image/barner/something-lost.png" alt="404">
        <p>Sorry, the page you are looking for could not be found.</p>
        <RouterLink to="/">Go back to homepage</RouterLink>
    </div>
</template>
<style scoped>
    .container {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h1 {
    font-size: 100px;
    color: #333;
    margin-bottom: 20px;
}

p {
    font-size: 24px;
    color: #555;
    margin-bottom: 40px;
}

a {
    text-decoration: none;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

a:hover {
    background-color: #555;
}
</style>