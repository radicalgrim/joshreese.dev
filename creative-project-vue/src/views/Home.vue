<template>
<div class="home">
  <div class="page">
    <div class="spacer-1"></div>
    <div class="spacer-2"></div>
    <div class="page-title">
      <div class="page-title-item">
        <h1 class="title">Reese's Pieces</h1>
        <p class="title">Because we're tired of social media</p>
      </div>
    </div>
    <div class="spacer-2"></div>

    <img src="/images/family-photo-1.jpeg" class="photo">

    <div class="spacer-2"></div>
    <div class="spacer-1"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style>
.page {
  background-color: #f5f5f5;
}

.spacer-1 {
  height: 100px;
  background-color: #9bb3cf;
}

.spacer-2 {
  height: 50px;
}

.page-title {
  display: flex;
  justify-content: center;
}

.page-title-item {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.title {
  text-align: left;
  font-family: sans-serif;
  color: #808080;
}

h1.title {
  font-size: 4em;
}

.photo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

a {
  text-decoration: none !important;
  color: #808080;
}
</style>
