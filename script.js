$(document).ready(function() {

	// var listLink = $("#list-music-link");
	// var listView = $("#list-music");
	// var addMusicLink = $("#add-music-link");
	// var addMusicView = $("#add-music");

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
	})

// ***** add music functionality *****//
	// $("#addButton").click(function() {


	})


});


// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs[songs.length] = "Slide > by Goo Goo Dolls on the album Dizzy Up the Girl"
// songs.unshift = "Kerosene > by Miranda Lambert on the album Kerosene"

// $("#songs")
// var song0text = song0element.innerHTML;

// song0text = songs[0];
// song0element.innerHTML = song0text;