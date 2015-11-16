define(function(require) {
//dependencies
	var $ = require("jquery");
//clear songs list	
    return {
		clearOldSongs: function() {
			$("#list-of-songs").empty();
		}
	};
});
