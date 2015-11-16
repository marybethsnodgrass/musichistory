requirejs(
  ["jquery", "hbs", "bootstrap", "loadSongs", "addSong"], 
  function($, Handlebars, bootstrap, loadSongs, addSong) {

    var newTitle = $("#titleInput");
    var newArtist = $("#artistInput");
    var newAlbum = $("#albumInput");
    var newGenre = $("#genreInput");
    var newSong = {};

    $("#addButton").click(function(e){
        $("#list-music").addClass("visible");
        $("#list-music").removeClass("hidden");

        $("#add-music").addClass("hidden");
        $("#add-music").removeClass("visible");

        newSong = {
             "title": newTitle.val(),
             "artist": newArtist.val(),
             "album": newAlbum.val(),
             "genre": newGenre.val()
        };

        addSong.postSong(newSong)
            .then(function() {
                loadSongs.insertSongstoDOM(newSong);
            })
            .then(function() {
            //resetting fields to be empty
                newTitle.val("");
                newArtist.val("");
                newAlbum.val("");
                newGenre.val("");

            }).fail(function(){
                console.log("error");
            });
    });
});


  