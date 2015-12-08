app.controller("songlistCtrl", ["$scope", "getSongData" ,function($scope, getSongData) {

    getSongData.loadSongs()
    .then(function () {
        $scope.songs = getSongData.getSongs();
        console.log($scope.songs);
        },
        function (error) {
            console.log(error);
        });
}]);