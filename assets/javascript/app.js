defaultButtons();
var array = [];

function defaultButtons() {
  $.each(["cat", "dog", "catdog"], function (index, value) {

    var button = $("<button>");
    button.addClass("buttons");
    button.attr("value", value);
    button.attr("data-name", value);
    button.text(value);

    $("#new-button").append(button);


  });
}
console.log(array);

function savedButtonGif() {
  var textInput = $(this).val();
  console.log(textInput);

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=hj0ZAUE0IjfCkvuoazUXl20pNgnLFUSW&tag=" + textInput;

  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var imageUrl = response.data.image_original_url;

    var gifImage = $("<img>");

    gifImage.attr("src", imageUrl);
    gifImage.attr("alt", "Gif" + textInput);

    $("#images").prepend(gifImage);
  });

}

function displayGif() {

  var textInput = $("#text-input").val().trim();
  console.log(textInput);

  var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=hj0ZAUE0IjfCkvuoazUXl20pNgnLFUSW&tag=" + textInput;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var imageUrl = response.data.image_original_url;

    var gifImage = $("<img>");
    
    gifImage.attr("src", imageUrl);
    gifImage.attr("alt", "Gif" + "" + textInput);

    $("#images").prepend(gifImage);
  });

}

function renderButtons() {

  $("#new-button").empty();
  defaultButtons();
  for (var i = 0; i < array.length; i++) {

    var button = $("<button>");

    button.addClass("buttons");
    button.attr("value", array[i]);
    button.attr("data-name", array[i]);
    button.text(array[i]);

    $("#new-button").append(button);
  }
}

$("#submit-button").on("click", function (event) {
  event.preventDefault();

  var textInput = $("#text-input").val().trim();

  array.push(textInput);
  console.log(textInput);

  displayGif();
  renderButtons();
});

$(document).on("click", ".buttons", savedButtonGif);