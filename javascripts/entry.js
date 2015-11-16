requirejs.config({
	baseUrl : "./javascripts",
	paths : {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min",
		"hbs" : "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap" : "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"q": "../lib/bower_components/q/q",
		"firebase" : "../lib/bower_components/firebase/firebase",
		"lodash": "../lib/bower_components/lodash/lodash.min"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});

//linking dependencies
requirejs(
	["bootstrap", "hbs", "app", "addSong", "deleteSong", "addSongPromise", "deleteSongPromise"],
	function(bootstrap, handlebars, app, addSong, deleteSong, addSongPromise, deleteSongPromise){
	}
);
