define(["jquery"], function($) {

	// ********* AJAX ON SONGS.JSON ****** //
    return {
    	getSongs: function(callback) {
		    $.ajax({
		    	url: "data/songs.json"
			    // url: "https://burning-torch-430.firebaseio.com/.json"
		    }).done(callback);
		}

	};

	// $ajax({
	// 	url: "https://burning-torch-430.firebaseio.com/songs.json";
	// 	method: "POST";
	// 	data: JSON.stringify(newSong)
	// }).done(function(addedSong))


});
