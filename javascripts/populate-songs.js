define(["jquery"], function($) {

	// ********* AJAX ON SONGS.JSON ****** //
    return {
    	getSongs: function(callback) {
		    $.ajax({
			    url: "data/songs.json"
		    }).done(callback);
		}

	};



});
