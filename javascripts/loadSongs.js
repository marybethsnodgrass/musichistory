define(["jquery", "hbs/handlebars"], function ($, hbs) {
		// console.log("load-songs is working!");

	return {
		insertSongstoDOM: function(songData) {
			//hbs template load with requirejs for SONG-CONTAINER
			require(["hbs!../templates/songs"], function (songTemplate) {
				$("#list-of-songs").append(songTemplate(songData));
				console.log(songData);
			});

			require(["hbs!../templates/artists"], function (songTemplate) {
				$("#artist-select").append(songTemplate(songData));
				console.log(songData);
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

// *******m add new data to filter options  ********* //


	// *******m filter/sort functionality ********* //
	// $("#artist-select").change(function() {
	// 	var str = "";
 //   		$( "select option:selected" ).each(function() {
 //      		str += $( this ).text() + " ";
 //   		});
 //   		$( "div" ).text( str );
 //  })
 //  .change();
	
