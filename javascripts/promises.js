requirejs(
  ["jquery", "hbs", "bootstrap", "loadSongs", "addSong", "populate-songs", "newSong"], 
  function($, Handlebars, bootstrap, loadSongs, addSong, populate_songs, clearOldSongList) {

    var newTitle = $("#titleInput");
    var newArtist = $("#artistInput");
    var newAlbum = $("#albumInput");
    var newGenre = $("#genreInput");
    var newSong = {};

    $("#addButton").click(function(e){
        

        newSong = {
             "title": newTitle.val(),
             "artist": newArtist.val(),
             "album": newAlbum.val(),
             "genre": newGenre.val()
        };

        addSong.postSong(newSong)
            .then(function() {
                clearOldSongList.clearOldSongs();
            })
            .then(function() {
                populate_songs.getSongs(loadSongs.insertSongstoDOM);
            })
            .then(function() {
                $("#list-music").addClass("visible");
                $("#list-music").removeClass("hidden");

                $("#add-music").addClass("hidden");
                $("#add-music").removeClass("visible");
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


  