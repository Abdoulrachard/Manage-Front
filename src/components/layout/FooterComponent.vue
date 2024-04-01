<script setup>

</script>
<template>
  <footer class="container d-flex">
    <div class="footer_links">
      <ul class="links">
        <li><RouterLink to="/apropos">À propos</RouterLink></li>
        <li><RouterLink to="/emplois">Emploi</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
      <ul class="social d-flex">
        <li><a href="javascript::void(0)"><i class="fa-brands fa-linkedin-in" style="color: #ffffff;"></i></a></li>
        <li><a href="javascript::void(0)"><i class="fa-brands fa-instagram" style="color: #ffffff;"></i></a></li>
        <li><a href="javascript::void(0)"><i class="fa-brands fa-pinterest-p" style="color: #ffffff;"></i></a></li>
        <li><a href="javascript::void(0)"><i class="fa-brands fa-vimeo-v" style="color: #ffffff;"></i></a></li>
      </ul>
      <ul class="d-flex last">
            <li><a href="javascript::void(0)">FR | </a></li>
            <li><a href="javascript::void(0)"> EN |</a></li>
            <li><a href="javascript::void(0)"> DE</a></li>
      </ul>
    </div>
    <div class="d-flex right_item ">
      <p>© Copyright 2024 CCHE Lausanne SA | 
        <a href="javascript::void(0)">Confidentialité</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
  ul li a ,a{
    text-decoration: none;
    color: #010101;
  }
  ul li a:hover,a:hover{
    text-decoration: none;
    color: #010101;
  }
  li{
    list-style: none;
  }
  .links li{
    padding-bottom:7px !important ;
  }
  .links li a {
    font-size: 1.1111111111rem;
    font-weight: 600;
}
  .last{
  align-items: center;
 
}
.last li {
  margin-right: 7px;
}
.social li {
  margin-right: 8px;
}
.right_item p ,.right_item p > a{
  font-size: 0.78rem;
  font-weight: 500;
}
.right_item p > a{
  text-decoration: underline;
}
.right_item{
  align-items: flex-end !important;
}
.last li a{
  font-size: .9rem;
}
.container {
  width: 100%;
  max-width: 100%;
  justify-content: space-between;
}
.social i {
  font-size: 18px;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  background-color: #010101;
  padding: 8px;
}
.social{
  align-items: center;
}
ul{
  padding-left: .8rem;
}
</style>