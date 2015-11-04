define(["jquery"], function($) {
	
	// ********* delete song function****** //
	var deleteSong = function() {
		$(this).parent().remove();
	};
	$(document).on("click", ".deleteButton", deleteSong);

	// ********* append songs function ****** //
	var appendSongs = function(song) {
	    $("#list-of-songs").append("<div> <h1>" + song.title + "</h1> <span>" + song.artist + "</span> <span class='center'>" + song.album + "</span> <span>" + song.genre + "</span> <button class='deleteButton'>Delete</button> </div>");
	};

	// ******* More button functionality ********* //
	$(document).on("click", "#moreButton", function () {
		$.getJSON("data/songs2.json", function (song) {
			console.log('working', song);
		    song.songs2.forEach(appendSongs);
		});
	});



	 // ********* AJAX ON SONGS2.JSON ****** //
	$.ajax({
		url: "data/songs2.json"
	}).done(function(contentsOfTheFile) {
		console.log("the contents of songs2.json");
	    console.log(contentsOfTheFile.songs2);

		// // ********* LOAD MORE SONGS FROM SONGS2.JSON ****** //    
		// contentsOfTheFile.songs2.forEach(appendSongs);

	 //    // $(document).on("click", "#moreButton", 
	});

});