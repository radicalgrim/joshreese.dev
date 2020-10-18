document.getElementById("get-cat-fact").addEventListener("click", function(event) {

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