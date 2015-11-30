define(function(require){

  return {
    songs: require("hbs!../templates/songs"),
    albums: require("hbs!../templates/albums"),
    artists: require("hbs!../templates/artists"),
    addMusicView: require("hbs!../templates/addMusicView"),
    filterDiv: require("hbs!../templates/filterDiv")
  };

});