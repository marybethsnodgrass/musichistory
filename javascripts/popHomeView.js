define(function(require) {
//dependencies
    var _ = require("lodash");
    var Q = require("q");
    var $ = require("jquery");
    var Handlebars = require("hbs");
    var bootstrap = require("bootstrap");

  //Dependency files
    var populateSongs = require("populateSongs");
    var loadSongs = require("loadSongs");
    var templates = require("templates");

    return {
        popHomeView: function(event) { 
            $("#list-music").show();
            $("#add-music").hide();
            populateSongs.getSongs(loadSongs.insertSongstoDOM);
            $("#search").html(templates.filterDiv());
        }
    };  
});
