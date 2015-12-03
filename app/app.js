var app = angular.module("musicHistoryApp", ["ngRoute"]);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/songs/list', {
        templateUrl: 'partials/songlist.html',
        controller: 'songlistCtrl'
      }).
      when('/songs/new', {
        templateUrl: 'partials/newSongForm.html',
        controller: 'newSongFormCtrl'
      });
  }]);