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
        filterArtists: function(songData) {
            var selectedArtist = $("#artist-select option:selected").text();
            console.log("selectedArtist", selectedArtist);
        }
 		//grab text of which artist option is selected
    //     filterAlbums: function(songData) {
 	 	// 	var selectedAlbum = $("#album-select option:selected").text();
 			// console.log("selectedArtist", selectedAlbum);
   	//     }

    };
	
});

    //loop through list of all songs; key used when you don't know name of ones added
    // console.log("moduleSongsObject", loadSongs.insertSongstoDOM);
  //   for (var key in moduleSongsObject.songs) {
  //     //define var for current song values
  //     var currentSong = moduleSongsObject.songs[key];
  //     // console.log("currentSong", currentSong);
  //     // Does `selectedartist` equal `currentSong.artist`?
  //     if (currentSong.artist === selectedArtist) {
  //       //target object within obejct then make that the current song value
  //       filteredSongs.songs[key] = currentSong;
  //     }
  //   }
  //   console.log("filteredSongs", filteredSongs);
  //   populateTemplates(filteredSongs);

  // });

  // $("#album-options").change(function () {
  //   var filtered2 = {
  //     songs: {}
  //   };
  //   var selectedAlbum = $("#album-options option:selected").text();
  //   console.log("selectedAlbum", selectedAlbum);
  //   //loop through list of all songs; key used when you don't know name of ones added
  //   console.log("moduleSongsObject", moduleSongsObject);
  //   for (var key in moduleSongsObject.songs) {
  //     //define var for current song values
  //     var currentSong = moduleSongsObject.songs[key];
  //     // console.log("currentSong", currentSong);
  //     // Does `selectedalbum` equal `currentSong.album`?
  //     if (currentSong.album === selectedAlbum) {
  //       //target object within obejct then make that the current song value
  //       filtered2.songs[key] = currentSong;
  //     }
  //   }
  //   console.log("filtered2", filtered2);
  //   populateTemplates(filtered2);
