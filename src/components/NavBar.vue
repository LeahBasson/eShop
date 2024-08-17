<template>
     <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <router-link to="/"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareLogo2.gif" alt="logo" loading="eager"></router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><img class="img-fluid" src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareLogo2.gif" alt="logo" loading="eager"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item mt-2">
                  <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item mt-2">
                    <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
                </li>
              </ul>
              

              <ul class="navbar-nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#account"><i class="bi bi-person"></i></a>
                  </li>
                <!-- <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#bag"><i class="bi bi-bag"></i></a>
                </li> -->
              </ul>
            </div>
    
          </div>
        </div>
      </nav>
</template>

<style scoped>
img[alt='logo']{
    width: 13.5rem;
    object-fit: cover;
    object-position: center;
    transition: all .5s;
}

img[alt='logo']:hover{
  transform: scale(1.1);
}

.nav-link{
    color: black;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
}

.nav-link:hover{
    color: #5D7599; 
}

</style>