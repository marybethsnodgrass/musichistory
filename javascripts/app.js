define(["jquery", "populate-songs", "loadSongs", "filterAlbums", "filterArtists"], function($, populate_songs, loadSongs, filter_Albums, filter_Artists) {
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
	
	// *******m populate my songs  ********* //
	populate_songs.getSongs(loadSongs.insertSongstoDOM);

	$("#artist-select").change(filter_Artists.filterArtists);
	$("#album-select").change(filter_Albums.filterAlbums);

});
