define(function(require) {
//dependencies
    var $ = require("jquery");
    var loadSongs = require("loadSongs");

// variable for filtering songs	
	var filteredSongs = {
    	songs: {}
    };

	return {
        //grab text of which artist option is selected
        filterAlbums: function(songData) {
 	 		var selectedAlbum = $("#album-select option:selected").text();
 			console.log("selectedArtist", selectedAlbum);
   	    }

    };
	
});