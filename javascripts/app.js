define(["jquery", "populate-songs", "loadSongs"], function($, populate_songs, loadSongs) {
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
	function deleteSong() {
		$(this).parent().remove();
	}
	$(document).on("click", ".deleteButton", deleteSong);


// ********* append songs function (and add title, artist, album option to filter options) ****** //
	
	// *******m add new data to filter options  ********* //
	var artistArray = [];
	var albumArray = [];

	function addArtistToFilter() {
    	var artistElementString = "<option>" + artistArray[artistArray.length - 1] + "</option>";
	    $("#artist-select").append(artistElementString);
	}
	function addAlbumToFilter() {
    	var albumElementString = "<option>" + albumArray[albumArray.length - 1] + "</option>";
	    $("#album-select").append(albumElementString);
	}

	// *******m filter/sort functionality ********* //
	// $("#artist-select").change(function() {
	// 	var str = "";
 //   		$( "select option:selected" ).each(function() {
 //      		str += $( this ).text() + " ";
 //   		});
 //   		$( "div" ).text( str );
 //  })
 //  .change();
	
	// *******m functions to populate songs from JSON files ********* //


	function appendSongsJSON(songList) {
		    if (artistArray.indexOf(currentSong.artist) === -1) {
		    	artistArray.push(currentSong.artist);
		    	addArtistToFilter();
		    } 
		    if (albumArray.indexOf(currentSong.album) === -1) {
		    	albumArray.push(currentSong.album);
		    	addAlbumToFilter();
		    }
		}

		// *******m populate my songs  ********* //
	populate_songs.getSongs(loadSongs.insertSongstoDOM);

	// *******m functions to add a songs ********* //
	function appendAddSong(songList) {
    	var elementString = "<div> <h1>" + $("#songInput").val()+ "</h1>";
		elementString += "<span>" + $("#artistInput").val() + "</span>";
		elementString += "<span class='center'>" + $("#albumInput").val()+ "</span>";
		elementString += "<span>" + $("#genreInput").val() + "</span> <button class='deleteButton'>Delete</button> </div>";
	    $("#list-of-songs").append(elementString);
	    if (artistArray.indexOf($("#artistInput").val()) === -1) {
	    	artistArray.push($("#artistInput").val());
	    	addArtistToFilter();
	    }
	    if (albumArray.indexOf($("#albumInput").val()) === -1) {
	    	albumArray.push($("#albumInput").val());
	    	addAlbumToFilter();
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
