define(["jquery", "loadSongs"], function ($, loadSongs) {

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