<template>
<div class="page">
  <div class="spacer-1"></div>
  <div class="spacer-2"></div>
  <div class="page-title">
    <div class="page-title-item">
      <h1 class="title">Luna's Page</h1>
      <p class="title">Yeah, we made a page for our cat</p>
    </div>
  </div>
  <div class="spacer-2"></div>

  <div class="luna-content">
    <div class='luna-column'>
      <img src="/images/luna.jpg" class="luna-photo">
    </div>
    <div class='fact-column'>
      <button type="button" class="btn btn-outline-secondary btn-lg" id="get-cat-fact">Gimme a Cat Fact</button>
      <div class='fact' id="cat-fact-result"></div>
    </div>
  </div>

  <div class="spacer-2"></div>
  <div class="spacer-1"></div>
</div>
</template>

<script>
window.onload = function() {
  var el = document.getElementById("get-cat-fact");
  if (el) {
    el.addEventListener("click", function(event) {

      // Prevent the default behavior
      event.preventDefault();

      // Fetch the current weather and format it
      const url = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1";
      fetch(url)
        // Get the response and turn it into JSON
        .then(function(response) {
          return response.json();

          // Format the results
        }).then(function(json) {

          console.log(json.text);

          let results = "<p class='title'>" + json.text + "</p>";

          document.getElementById("cat-fact-result").innerHTML = results;


        });
    });
  }
}
</script>

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

.luna-content {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}

.luna-column {
  width: 50%;
  margin-bottom: 150px;
}

.luna-photo {
  width: 100%;
}

.fact-column {
  width: 40%;
  margin-top: 100px;
}

.fact {
  margin-top: 50px;
}


/* Mobile Styles */
@media only screen and (max-width: 400px) {
  .luna-content {
    display: block;
    width: 100%;
    height: auto;
  }

  .luna-column {
    width: auto;
    margin-bottom: 40px;
  }

  .fact-column {
    width: auto;
    height: auto;
    margin: 20px;
  }
}
</style>
