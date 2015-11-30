define(function(require) {
  	var Firebase = require("firebase");
  	var $ = require("jquery");
  	var q = require("q");

  //Dependency files
  	var addSongPromise = require("addSongPromise");
  	var popHomeView = require("popHomeView");
  	var popAddMusicView = require("popAddMusicView");
  	var filterAlbums = require("filterAlbums");
    var populateSongs = require("populateSongs");
    var filterArtists = require("filterArtists");
    var deleteSongPromise = require("deleteSongPromise");

// ***** Event handler for add button
	//when add is clicked, song info is added to FB, and user is brought back
	//to their songs list which now shows the new song they just added.
  	$("#addButton").click(function() {
    	addSongPromise.addSong(newSong);
  	});

// ***** Event handlers for nav views
	//when list-music is clicked in nav, brings user to view that lists their music (home view)
  	$("#list-music-link").click(function() {
    	popHomeView.popHomeView();
  	});

  	//when list-music is clicked in nav, brings user to view that lists their music (home view)
  	$("#add-music-link").click(function() {
    	console.log("click is working");
    	popAddMusicView.popAddMusicView();
  	});

// ***** Delete Button
    $("body").on("click", ".deleteButton", function() {
    	deleteSongPromise.deleteSong();
    });

// ***** Filters
	//artist is selected in dropdown, only lists songs for that artist on home view
  	$("#artist-select").change(filterArtists.filterArtists);

  	//album is selected in dropdown, only lists songs for that album on home view
	$("#album-select").change(filterAlbums.filterAlbums);

});

