<script setup>


</script>
<template>
  <header>
    <nav class="header navbar fixed-top" style="height: 90px; ">
      <div class="container-fluid">
        <a class="navbar-brand" href="javascript::void(0)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 50"
            width="168" class="logo">
            <path
              d="M63.407 31.546l.065.242c2.287 8.429 8.877 13.082 18.518 13.094 6.216.003 10.938-1.799 14.039-5.374l.235-.279.233-.275 3.703 3.714-.208.239c-4.34 4.574-10.743 7.108-18.008 7.093-12.607-.012-21.707-6.62-24.436-17.685l-.091-.384-.086-.385h6.036zm-57.374 0l.067.242c2.29 8.429 8.878 13.082 18.522 13.094 6.379.003 11.18-1.892 14.271-5.653l.23-.275 3.709 3.714-.208.239C38.282 47.481 31.88 50.015 24.616 50 11.868 49.988 2.703 43.228.089 31.931L0 31.546h6.033zM153.176.394v49.349h-5.865v-25.19h-33.667V19.13h33.667V.394h5.865zM210 44.072v5.417h-37.407v-5.417H210zm-13.25-21.793v5.436h-23.925V22.28h23.925zM81.94 0c7.362.012 13.922 2.373 18.057 6.503l.272.278.215.233-3.826 3.812-.226-.25c-3.098-3.526-8.244-5.473-14.5-5.486-9.693-.006-16.263 4.48-18.542 12.674l-.1.369-.064.241-5.831-.009.104-.403C58.927 12.544 64.159-.024 81.94 0zM24.57 0c7.367.012 13.924 2.373 18.056 6.503l.272.278.22.233-3.831 3.812-.223-.25C35.969 7.05 30.819 5.102 24.56 5.09 14.867 5.084 8.298 9.57 6.018 17.764l-.099.369-.061.241-5.831-.009.104-.403C1.556 12.544 6.785-.024 24.569 0zm184.806.655v5.213h-36.783V.655h36.783z">
            </path>
          </svg></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="offcanvas offcanvas-top " tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel" style="height: auto !important;">
          <div class="offcanvas-header">
            <a class="navbar-brand" href="javascript::void(0)"><svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 210 50" width="168" class="logo">
                <path
                  d="M63.407 31.546l.065.242c2.287 8.429 8.877 13.082 18.518 13.094 6.216.003 10.938-1.799 14.039-5.374l.235-.279.233-.275 3.703 3.714-.208.239c-4.34 4.574-10.743 7.108-18.008 7.093-12.607-.012-21.707-6.62-24.436-17.685l-.091-.384-.086-.385h6.036zm-57.374 0l.067.242c2.29 8.429 8.878 13.082 18.522 13.094 6.379.003 11.18-1.892 14.271-5.653l.23-.275 3.709 3.714-.208.239C38.282 47.481 31.88 50.015 24.616 50 11.868 49.988 2.703 43.228.089 31.931L0 31.546h6.033zM153.176.394v49.349h-5.865v-25.19h-33.667V19.13h33.667V.394h5.865zM210 44.072v5.417h-37.407v-5.417H210zm-13.25-21.793v5.436h-23.925V22.28h23.925zM81.94 0c7.362.012 13.922 2.373 18.057 6.503l.272.278.215.233-3.826 3.812-.226-.25c-3.098-3.526-8.244-5.473-14.5-5.486-9.693-.006-16.263 4.48-18.542 12.674l-.1.369-.064.241-5.831-.009.104-.403C58.927 12.544 64.159-.024 81.94 0zM24.57 0c7.367.012 13.924 2.373 18.056 6.503l.272.278.22.233-3.831 3.812-.223-.25C35.969 7.05 30.819 5.102 24.56 5.09 14.867 5.084 8.298 9.57 6.018 17.764l-.099.369-.061.241-5.831-.009.104-.403C1.556 12.544 6.785-.024 24.569 0zm184.806.655v5.213h-36.783V.655h36.783z">
                </path>
              </svg></a>
            <button type="button" class="btn-close btn-close-dark " style=" opacity: 1;font-size: 25px;"
              data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <RouterLink class="nav-link"  to="/actualities" >Actualités</RouterLink>
                <RouterLink class="nav-link" to="/projects">Projets</RouterLink>
                <RouterLink class="nav-link" to="/equipes">Équipe</RouterLink>
                <RouterLink class="nav-link" to="/apropos">À propos</RouterLink>
                <RouterLink class="nav-link" to="/emplois">Emploi</RouterLink>
                <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    <!-- <VideoBarnerComponent /> -->
  </header>
</template>

<script>
export default {

}

</script>

<style scoped>
.nav-link {
  position: relative;
  color: #1d1d1d !important;
  padding-bottom: 0;
  width: fit-content;
  margin-bottom: 3px;
  font-size: 2.2222222222rem;
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  max-width: 100%; 
  height: 2px;
  background-color: #000; 
  transition: width 0.5s cubic-bezier(.694,0,.335,1);
}

.nav-link:hover::after {
  width: 100%; 
}

nav:hover {
  background: #ffffff;
}
</style>