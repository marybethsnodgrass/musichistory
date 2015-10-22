$(document).ready(function() {

	var listLink = $("#list-music-link");
	var listView = $("#list-music");
	var addMusicLink = $("#add-music-link");
	var addMusicView = $("#add-music");


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

});
