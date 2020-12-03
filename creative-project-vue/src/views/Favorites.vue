<template>
<div class="page">
  <div class="spacer-1"></div>
  <div class="spacer-2"></div>
  <div class="page-title">
    <div class="page-title-item">
      <h1 class="title">Our Favorites</h1>
      <p class="title">Our current recommendations in whatever genre we want</p>
    </div>
  </div>
  <div class="spacer-2"></div>


  <div class="favorites-container">
    <div class="card-container">

      <div class="card-container-item">
        <div class="card h-100">
          <img src="/images/ori-ww.jpg" class="card-img-top" alt="Ori and the Will-o-the-Wisps">
          <div class="card-body">
            <h5 class="card-title">Ori and The Will-o-the-Wisps</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div class="card-container-item">
        <div class="card h-100">
          <img src="/images/bb-enchiladas.jpg" class="card-img-top" alt="BudgetBytes Black Bean and Avocado Enchiladas">
          <div class="card-body">
            <h5 class="card-title">Black Bean and Avocado Enchiladas - BudgetBytes</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div class="card-container-item">
        <div class="card h-100">
          <img src="/images/fleet-foxes-shore.jpg" class="card-img-top" alt="Shore - Fleet Foxes">
          <div class="card-body">
            <h5 class="card-title">Shore - Fleet Foxes</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div class="card-container-item">
        <div class="card h-100">
          <img src="/images/sweet-chili-chicken-bowls.jpg" class="card-img-top" alt="Sweet Chili Chicken and Rice Bowl">
          <div class="card-body">
            <h5 class="card-title">Sweet Chili Chicken and Rice Bowl - BudgetBytes</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div class="card-container-item">
        <div class="card h-100">
          <img src="/images/community.jpg" class="card-img-top" alt="Community">
          <div class="card-body">
            <h5 class="card-title">Community</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      </div>

      <div class="card-container-item">
        <div class="card h-100">
          <img src="/images/super-mario-3d-all-stars.jpg" class="card-img-top" alt="Super Mario 3D All-Stars">
          <div class="card-body">
            <h5 class="card-title">Super Mario 3D All-Stars</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
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

.favorites-container {
  display: flex;
  justify-content: center;
}

.card-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
}

.card-container-item {
  display: flex;
  width: 450px;
  margin-bottom: 50px;
}

.card-img-top {
  object-fit: cover;
  width: 450px;
  height: 350px;
}

/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .card-container {
    width: 100%;
  }

  .card-container-item {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .card-img-top {
    width: 100%;
    height: auto;
  }

}
</style>
