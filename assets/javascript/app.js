
  var array = []
  
  function displayGif() {

    var textInput = $("#text-input").val().trim();
    console.log(textInput);

    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=hj0ZAUE0IjfCkvuoazUXl20pNgnLFUSW&tag=" + textInput;


    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {

        var imageUrl = response.data.image_original_url;

        var gifImage = $("<img>");

    
        gifImage.attr("src", imageUrl);
        gifImage.attr("alt", "cat image");

        $("#images").prepend(gifImage);
      });

    }
  function renderButtons() {

    
    $("#new-button").empty();

    
    for (var i = 0; i < array.length; i++) {

      var a = $("<button>");
   
      a.addClass("buttons");
    
      a.attr("data-name", array[i]);
    
      a.text(array[i]);
     
      $("#new-button").append(a);

    }


   
    

  }

 
  $("#submit-button").on("click", function(event) {
    event.preventDefault();

   
    var textInput = $("#text-input").val().trim();

    array.push(textInput);
    console.log(textInput);
    

   
    renderButtons();
  });

 
  $(document).on("click", ".buttons", displayGif);

 
  renderButtons();