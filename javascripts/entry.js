requirejs.config({
	baseURL: "./javascripts",
	paths: {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min"
	}
});

//linking dependencies
require(
	["app", "populate-songs", "get-more-songs"],
	function(app, populate_songs, get_more_songs) {
});
