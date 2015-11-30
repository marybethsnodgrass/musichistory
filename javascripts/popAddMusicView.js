define(function(require) {
//dependencies
    var _ = require("lodash");
    var Q = require("q");
    var $ = require("jquery");
    var Handlebars = require("hbs");
    var bootstrap = require("bootstrap");

    var templates = require("templates");

    return {
        popAddMusicView: function(event) { 
            $("#list-music").hide();
            $("#add-music").show();
            $("#add-music").html(templates.addMusicView());
        }
    };  
});
