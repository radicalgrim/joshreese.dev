<template>
<div class="page">
  <div class="spacer-1"></div>
  <div class="spacer-2"></div>
  <div class="page-title">
    <div class="page-title-item">
      <h1 class="title">Landon's Page</h1>
      <p class="title">Cuteness Overload</p>
    </div>
  </div>
  <div class="spacer-2"></div>

  <div class="grid-container">
    <div class="row">
      <div class="col">
        <img src="/images/landon-and-noah.jpg" class="photo-grid featured">
      </div>
      <div class="col">
        <img src="/images/landon-at-the-pool.jpg" class="photo-grid featured">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src="/images/landon-in-a-beanie.jpg" class="photo-grid">
      </div>
      <div class="col">
        <img src="/images/landon-in-a-tree.jpg" class="photo-grid">
      </div>
      <div class="col">
        <img src="/images/landon-in-glasses.jpg" class="photo-grid">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <img src="/images/landon-in-the-backyard.jpg" class="photo-grid">
      </div>
      <div class="col">
        <img src="/images/landon-on-a-hike.jpg" class="photo-grid">
      </div>
      <div class="col">
        <img src="/images/landon-sitting-on-the-path.jpg" class="photo-grid">
      </div>
    </div>
  </div>

  <div class="spacer-2"></div>
  <div class="spacer-1"></div>
</div>
</template>

<style scoped>
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

.grid-container {
  width: 80%;
  margin: auto;
}

.row {
  margin-bottom: 50px;
}

.photo-grid {
  object-fit: cover;
  width: 100%;
  height: 550px;
}

.featured {
  height: 750px;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .grid-container {
    width: 100%;
    height: auto;
  }

  .row {
    width: auto;
    height: auto;
    margin: 0px;
  }

  .col {
    width: 100%;
    height: auto;
    flex-basis: auto;
    padding: 0px;
    margin: 15px 0px;
  }

  .photo-grid {
    width: 100%;
    height: 100%;
  }

  .featured {
    height: auto;
  }
}
</style>
