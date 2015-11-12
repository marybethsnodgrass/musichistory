define(["jquery"], function($) {

  $(document).on("click", ".deleteButton", function() {
    var songKey = $(this).attr("id");

    // DELETE the song from Firebase by specifying the URL to 
    // the exact song you are targeting.
    $.ajax({
      url: "https://burning-torch-430.firebaseio.com/songs/"+songKey+"/.json",
      method: "DELETE"
    }).done(function(response) {
      console.log("response from Firebase:", response);
      // You'll likely want to execute the code that you're using
      // on page load here to run the GET XHR and bind to Handlebars
    });
    console.log(songKey);
  });

});