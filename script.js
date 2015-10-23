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




// ********* AJAX .DONE ****** //
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
	    contentsOfTheFile.songs.forEach(function(song) {
		    $("#list-of-songs").append("<div> <h1>" + song.title + "</h1> <span>" + song.artist + "</span> <span class='center'>" + song.album + "</span> <span>" + song.genre + "</span> <button class='deleteButton'>Delete</button> </div>");
		});

// ********* DELETE SONG FUNCTIONALITY ****** //
		$(".deleteButton").click(function() {
			$(this).parent().remove();
	});



	});

	

});

