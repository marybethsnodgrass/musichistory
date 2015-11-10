define(["jquery"], function($) {
	// ********* AJAX ON SONGS2.JSON ****** //
    return {
		getSongs: function(callbackFunction) {
		    $.ajax({
			    url: "https://burning-torch-430.firebaseio.com/.json"
			}).done(callbackFunction);
		}
	};
});
