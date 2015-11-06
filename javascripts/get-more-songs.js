define(["jquery"], function($) {
	// ********* AJAX ON SONGS2.JSON ****** //
    return {
		getSongs: function(callbackFunction) {
		    $.ajax({
			    url: "data/songs2.json"
			}).done(callbackFunction);
		}
	};
});
