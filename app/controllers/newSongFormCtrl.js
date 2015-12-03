app.controller("newSongFormCtrl", ["$scope",function($scope) {

    $scope.newSong = { artist: "", album: "", title: ""};

    $scope.addSong = function() {
      $scope.songs.$add({
        artist: $scope.newSong.artist,
        title: $scope.newSong.title,
        album: $scope.newSong.album
      });
    };
  }
]);