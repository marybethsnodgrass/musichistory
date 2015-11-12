define(["jquery", "loadSongs"], function($, loadSongs) {
	var newTitle = $("#titleInput");
	var newArtist = $("#artistInput");
	var newAlbum = $("#albumInput");
	var newGenre = $("#genreInput");

	$("#addButton").click(function(e){

		var newSong = {
		   "title": newTitle.val(),
		   "artist": newArtist.val(),
		   "album": newAlbum.val(),
		   "genre": newGenre.val()
		 };

		console.log("working", newSong);	

		$.ajax({
		   url: "https://burning-torch-430.firebaseio.com/songs.json",
		   method: "POST", 
		   data: JSON.stringify(newSong)
		}).done(function(addedSong) {
		   console.log("Your new song is", addedSong);
		   loadSongs.insertSongstoDOM(newSong);
		});

		//resetting fields to be empty
		newTitle.val("");
		newArtist.val("");
		newAlbum.val("");
		newGenre.val("");

		$("#list-music").addClass("visible");
		$("#list-music").removeClass("hidden");

		$("#add-music").addClass("hidden");
		$("#add-music").removeClass("visible");
	});
	 
});
