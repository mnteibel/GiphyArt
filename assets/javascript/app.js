var buttons = ["Ferris Bueller's Day Off", "Back to the Future", "Ghostbusters", "Top Gun", "Predator", "Fast Times at Ridgemont High", "Caddyshack", "Footloose", "The Terminator", "Roadhouse", "The Goonies", "The Breakfast Club", "Die Hard"]

  
  function displayGifs(){

    // declares button data-name to gif variable
    var gifs = $(this).attr("data-name")

    // url for API plus data-name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gifs + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response){

      var results = response.data;

        for (var i = 0; i < results.length; i++){

          var gifDiv = $("<div>")

          var ratingLetter = results[i].rating;

          var ratings = $("<p>").text("Rating: " + ratingLetter)
      
          var gif = $("<img>");

          gif.attr("src", results[i].images.fixed_height.url)

          gifDiv.append(ratings)

          gifDiv.append(gif)

          $("#gifs").prepend(gifDiv)
      }
    })
  }
  /// Call function to create buttons from buttons array
  function renderButtons() {

    $("#buttons-view").empty();

    /// Loop through array buttons
    for (var i = 0; i < buttons.length; i++){

      // 
      var buttonDiv = $("<button>");

      buttonDiv.addClass("button");

      buttonDiv.attr("data-name", buttons[i]);

      buttonDiv.text(buttons[i])

      $("#buttons-view").append(buttonDiv)
    }
  }
    $("#add-button").on("click", function(event){

      event.preventDefault();

      var newButton = $("#button-input").val().trim()

      buttons.push(newButton);

      renderButtons();
    })

  renderButtons();

    $(document).on("click", ".button", displayGifs);

