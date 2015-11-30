define(function(require) {
//dependencies
    var _ = require("lodash");
    var Q = require("q");
    var $ = require("jquery");
    var Handlebars = require("hbs");
    var bootstrap = require("bootstrap");
    var loadSongs = require("loadSongs");
    var addSong = require("addSong");
    var populateSongs = require("populateSongs");
    var clearOldSongList = require("clearOldSongList");
    var deferred = Q.defer();

    return {
        addSong: function(newSong) {       
        //variables for getting values from song input fields
            var newTitle = $("#titleInput");
            var newArtist = $("#artistInput");
            var newAlbum = $("#albumInput");
            var newGenre = $("#genreInput");

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
                    populateSongs.getSongs(loadSongs.insertSongstoDOM);
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
        }
    };  
});


  