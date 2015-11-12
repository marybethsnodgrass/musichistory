requirejs.config({
	baseUrl : "./javascripts",
	paths : {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min",
		"hbs" : "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap" : "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});

//linking dependencies
require(
	["bootstrap", "hbs", "app", "addSong", "deleteSong"],
	function(bootstrap, handlebars, app, addSong, deleteSong){
	}
);
