define(function(require) {
//dependencies
    var $ = require("jquery");
    var hbs = require("hbs/handlebars");	
    var templates = require("templates");

//variables for function
	var moduleSongsObject;
	var filteredSongs = {
    	songs: {}
    };

	return {
		insertSongstoDOM: function(songData) {
			//hbs template load with requirejs for SONG-CONTAINER
			$("#list-of-songs").html(templates.songs(songData));

			// var artistArray = [];
			// var albumArray = [];

			// hbs.registerHelper("noDuplicateArtists", function(options) {
			// 	if (artistArray.indexOf(this.artist) === -1) {
			//     	artistArray.push(this.artist);
			//     	return options.fn(this);
		 //    	} 
		 //    });

		 //    hbs.registerHelper("noDuplicateAlbums", function(options) {
			// 	if (albumArray.indexOf(this.album) === -1) {
			//     	artistArray.push(this.album);
			//     	return options.fn(this);
		 //    	} 
		 //    });
		}
	};
});

	
