$(document).ready(function() {


	// ******* navigation links *******//
	$("#list-music-link").click(function() {
		$("#list-music").addClass("visible");
		$("#list-music").removeClass("hidden");

		$("#add-music").addClass("hidden");
		$("#add-music").removeClass("visible");
	});


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

	// ********* append songs function ****** //
	var appendSongs = function(song) {
	    $("#list-of-songs").append("<div> <h1>" + song.title + "</h1> <span>" + song.artist + "</span> <span class='center'>" + song.album + "</span> <span>" + song.genre + "</span> <button class='deleteButton'>Delete</button> </div>");
	};

	// ********* AJAX ON SONGS.JSON ****** //
    $.ajax({
	    url: "data/songs.json"
    }).done(function(contentsOfTheFile) {
    // When you tell jQuery to read a file via the ajax method
    // it reads the contents, and then executes whatever function
    // that you specify here in the done() method, and passes in
    // the contents of the file as the first argument.
	    console.log("the contents of songs.json");
	    console.log(contentsOfTheFile.songs);

		// ********* ADD SONG FUNCTIONALITY ****** //	    
	    contentsOfTheFile.songs.forEach(appendSongs);
	});

	 // ********* AJAX ON SONGS2.JSON ****** //
	$.ajax({
		url: "data/songs2.json"
	}).done(function(contentsOfTheFile) {
		console.log("the contents of songs2.json");
	    console.log(contentsOfTheFile.songs2);

		// ********* LOAD MORE SONGS FROM SONGS2.JSON ****** //    
		contentsOfTheFile.songs2.forEach(appendSongs);

	    // $(document).on("click", "#moreButton", 
	});

});

