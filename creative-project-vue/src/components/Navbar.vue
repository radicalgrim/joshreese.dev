<template>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #5c7daa;">
  <router-link to="/" class="navbar-brand">Reese's Pieces</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/blog" class="nav-link">Blog</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/favorites" class="nav-link">Our Favorites</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/landon" class="nav-link">Landon's Page</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/luna" class="nav-link">Luna's Page</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  //props: {
  //  products: Array
  //}
}
</script>
