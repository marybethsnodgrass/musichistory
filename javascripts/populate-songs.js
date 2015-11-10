define(["jquery"], function($) {
	// ********* AJAX ON SONGSFIRE.JSON ****** //
    return {
		getSongs: function(callbackFunction) {
		    $.ajax({
			    url: "data/songs.json"
			}).done(callbackFunction);
		}
	};
});