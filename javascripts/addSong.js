define(function(require) {
	var _ = require("lodash");
	var Q = require("q");
	var $ = require("jquery");
	var deferred = Q.defer();

	return {
		postSong: function(newSong) {
		    $.ajax({
		         url: "https://burning-torch-430.firebaseio.com/songs.json",
		         method: "POST", 
		         data: JSON.stringify(newSong)
	        })
	        .done(function(addedSong) {
	        	console.log("it's done");
		      	deferred.resolve(addedSong);
		    })
		    .fail(function(xhr, status, error) {
	        	deferred.reject(error);
	        });

		    return deferred.promise;
		}
	};	
});


	         

