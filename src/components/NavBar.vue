<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div class="container-fluid">
          <router-link class="navbar-brand" to="/">
              <img src="https://leahbasson.github.io/MyImages/skincareWebsite/skincareLogo2.gif" loading="lazy" alt="logo">
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/about">About</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/products">Products</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/checkout">Checkout</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/admin">Admin</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link class="nav-link" to="/reachUs">Reach us</router-link>
                  </li>
                  <ul class="userAccount navbar-nav">
                      <li class="nav-item">
                          <router-link class="nav-link" to="/login">Login</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link class="nav-link" to="/logout">Logout</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link class="nav-link" to="/signup">Register</router-link>
                      </li>
                  </ul>
              </ul>
          </div>
      </div>
  </nav>
</template>

<style scoped>
img[alt='logo']{
    width: 10rem;
    aspect-ratio: 2/1;
    object-fit: cover;
    object-position: center;
    transition: all .5s;
}

img[alt='logo']:hover{
  transform: scale(1.1);
}
</style>