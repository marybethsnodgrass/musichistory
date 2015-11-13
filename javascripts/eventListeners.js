define(["jquery", "filterArtists", "populate-songs", "filterAlbums"], function($, filter_Artists, populate_Songs, filter_Albums) {

	$("#artist-select").change(filter_Artists.filterArtists);
	$("#album-select").change(filter_Albums.filterAlbums);

});