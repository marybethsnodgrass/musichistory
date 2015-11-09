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

	// ********* delete song function****** //
	var deleteSong = function() {
		$(this).parent().remove();
	};
	$(document).on("click", ".deleteButton", deleteSong);


// ********* append songs function (and add title, artist, album option to filter options) ****** //
	
	// *******m add new data to filter options  ********* //
	var artistArray = [];
	var albumsArray = [];

	function addDataToFilter() {
    	var elementString = "<option>" + artistArray[artistArray.length - 1] + "</option>";
	    $("#artist-select").append(elementString);
	}

	
	// *******m functions to populate songs from JSON files ********* //
	function appendSongsJSON(songList) {
	    for (var i = 0; i < songList.songs.length; i++) {
	    	var currentSong = songList.songs[i];
    		var elementString = "<div> <h1>" + currentSong.title + "</h1>";
    		elementString += "<span>" + currentSong.artist + "</span>";
    		elementString += "<span class='center'>" + currentSong.album + "</span>";
    		elementString += "<span>" + currentSong.genre + "</span> <button class='deleteButton'>Delete</button> </div>";
		    $("#list-of-songs").append(elementString);
		    if (artistArray.indexOf(currentSong.artist) === -1) {
		    	artistArray.push(currentSong.artist);
		    	addDataToFilter();
		    }
		    console.log(artistArray);
		}
	}
		// *******m populate my songs  ********* //
	populate_songs.getSongs(appendSongsJSON);

		// *******m more button ********* //

	$("#moreButton").click(function() {
		get_more_songs.getSongs(appendSongsJSON);
	});

	// *******m functions to add a songs ********* //
	function appendAddSong(songList) {
    	var elementString = "<div> <h1>" + $("#songInput").val()+ "</h1>";
		elementString += "<span>" + $("#artistInput").val() + "</span>";
		elementString += "<span class='center'>" + $("#albumInput").val()+ "</span>";
		elementString += "<span>" + $("#genreInput").val() + "</span> <button class='deleteButton'>Delete</button> </div>";
	    $("#list-of-songs").append(elementString);
	    if (artistArray.indexOf($("#artistInput").val()) === -1) {
	    	artistArray.push($("#artistInput").val());
	    	addDataToFilter();
	    }
	}

	
	$("#addButton").click(function() {
		appendAddSong();
	// ******* view after add song button clicked *******//	
		$("#list-music").addClass("visible");
		$("#list-music").removeClass("hidden");

		$("#add-music").addClass("hidden");
		$("#add-music").removeClass("visible");
	});

});
