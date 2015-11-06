define(["jquery", "populate-songs", "get-more-songs"], function($, populate_songs, get_more_songs) {
// ******* navigation links *******//
	// ******* home view *******//
	$("#list-music-link").click(function() {
		$("#list-music").addClass("visible");
		$("#list-music").removeClass("hidden");

		$("#add-music").addClass("hidden");
		$("#add-music").removeClass("visible");
	});

	// ******* add music view *******//
	$("#add-music-link").click(function() {
		$("#add-music").addClass("visible");
		$("#add-music").removeClass("hidden");

		$("#list-music").addClass("hidden");
		$("#list-music").removeClass("visible");
	});

	// ******* view after add song button clicked *******//	
	$("#addButton").click(function() {
		$("#list-music").addClass("visible");
		$("#list-music").removeClass("hidden");

		$("#add-music").addClass("hidden");
		$("#add-music").removeClass("visible");
	});

	// ********* delete song function****** //
	var deleteSong = function() {
		$(this).parent().remove();
	};
	$(document).on("click", ".deleteButton", deleteSong);


	// ********* append songs function ****** //
	var appendSongsJSON = function(songList) {
	    for (var i = 0; i < songList.songs.length; i++) {
	    	var currentSong = songList.songs[i];
	    	console.log("current song is ", currentSong);
	    		var elementString = "<div> <h1>" + currentSong.title + "</h1>";
	    		elementString += "<span>" + currentSong.artist + "</span>";
	    		elementString += "<span class='center'>" + currentSong.album + "</span>";
	    		elementString += "<span>" + currentSong.genre + "</span> <button class='deleteButton'>Delete</button> </div>";
	    $("#list-of-songs").append(elementString);
	}
	};

	// *******m populate my songs  ********* //
	populate_songs.getSongs(appendSongsJSON);

	// *******m more button functionality ********* //

	$("#moreButton").click(function() {
		get_more_songs.getSongs(appendSongsJSON);
	});
	// *******m Add Song  ********* //
	
	$(document).on("click", "#addButton", function () {
		$("#list-of-songs").append("<div> <h1>" + $("#songInput").val() + "</h1> <span>" + $("#artistInput").val()  + "</span> <span class='center'>" + $("#albumInput").val() + "</span> <span>" + $("genreInput").val() + "</span> <button class='deleteButton'>Delete</button> </div>");
	});
});
