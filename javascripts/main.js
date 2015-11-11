// define(["jquery"], function($) {
// 	$("#addButton").click(function(){
// 		 var newSong = {
// 		   "title": $("#titleInput").val(),
// 		   "artist": $("#artistInput").val(),
// 		   "album": $("#albumInput").val(),
// 		   "genre": $("#genreInput").val()
// 		 };
// 	});

// 	// console.log("working", newSong.title);

// 	 $.ajax({
// 	   url: "https://burning-torch-430.firebaseio.com/songs.json",
// 	   method: "POST", 
// 	   data:JSON.stringify(newsong)
// 	 }).done(function(addedsong) {
// 	   console.log("Your new song is", addedSong);
// 	 });
// });

