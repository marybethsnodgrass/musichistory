define(function(require) {
    var _ = require("lodash");
    var Q = require("q");
    var $ = require("jquery");
    var deferred = Q.defer();

    return {
        removeSong: function(songKey) {
            $.ajax({
              url: "https://burning-torch-430.firebaseio.com/songs/"+songKey+"/.json",
              method: "DELETE"
            // You'll likely want to execute the code that you're using
            // on page load here to run the GET XHR and bind to Handlebars
            })
            .done(function(byeSong) {
                console.log("it's done");
                deferred.resolve(byeSong);
            })
            .fail(function(xhr, status, error) {
                deferred.reject(error);
              });

            return deferred.promise;
        }
    };  
});
