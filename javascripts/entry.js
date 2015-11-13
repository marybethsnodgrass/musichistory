requirejs.config({
	baseUrl : "./javascripts",
	paths : {
		"jquery" : "../lib/bower_components/jquery/dist/jquery.min",
		"hbs" : "../lib/bower_components/require-handlebars-plugin/hbs",
		"bootstrap" : "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"q": "../bower_components/q/q",
		"firebase" : "../lib/bower_components/firebase/firebase"
	},
	shim: {
		"bootstrap": ["jquery"]
	}
});

//linking dependencies
requirejs(
	["bootstrap", "hbs", "app", "addSong", "deleteSong", "eventListeners"],
	function(bootstrap, handlebars, app, addSong, deleteSong, eventListeners){
	}
);
