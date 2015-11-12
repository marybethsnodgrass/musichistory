define(["jquery", "hbs"], function ($, hbs) {
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

		}
	};
});

