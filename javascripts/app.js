define(function(require) {
//dependencies
    var _ = require("lodash");
    var Q = require("q");
    var $ = require("jquery");
    var Handlebars = require("hbs");
    var bootstrap = require("bootstrap");
    var loadSongs = require("loadSongs");
    var filterAlbums = require("filterAlbums");
    var populateSongs = require("populateSongs");
    var filterArtists = require("filterArtists");

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
	populateSongs.getSongs(loadSongs.insertSongstoDOM);

	$("#artist-select").change(filterArtists.filterArtists);
	$("#album-select").change(filterAlbums.filterAlbums);

});
