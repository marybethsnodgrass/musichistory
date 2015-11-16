define(["jquery", "hbs/handlebars"], function ($, hbs) {
		// console.log("load-songs is working!");
	var moduleSongsObject;
	var filteredSongs = {
    	songs: {}
    };

	return {
		insertSongstoDOM: function(songData) {
			//hbs template load with requirejs for SONG-CONTAINER
			require(["hbs!../templates/songs"], function (songTemplate) {
				$("#list-of-songs").append(songTemplate(songData));
			});

			require(["hbs!../templates/artists"], function (songTemplate) {
				$("#artist-select").append(songTemplate(songData));
			});

			require(["hbs!../templates/albums"], function (songTemplate) {
				$("#album-select").append(songTemplate(songData));
				console.log(songData);
			});

			var artistArray = [];
			var albumArray = [];

			hbs.registerHelper("noDuplicateArtists", function(options) {
				if (artistArray.indexOf(this.artist) === -1) {
			    	artistArray.push(this.artist);
			    	return options.fn(this);
		    	} 
		    });

		    hbs.registerHelper("noDuplicateAlbums", function(options) {
				if (albumArray.indexOf(this.album) === -1) {
			    	artistArray.push(this.album);
			    	return options.fn(this);
		    	} 
		    });
		}
	};
});

	
