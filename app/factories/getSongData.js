app.factory("getSongData", ["$q", "$http", function($q, $http) {
    
    function loadSongs () {
        return $q(function(resolve, reject) {
            $http.get('data/songs.json')
            .success(
                function(objectFromJSONFile) {
                    console.log("objectFromJSONFile", objectFromJSONFile);
                    resolve(objectFromJSONFile.songs);
                }, function(error) {
                    reject(error);
                }
            );
        });
    }

    var songList;
    // first json promise
    var songPromise = loadSongs();

    songPromise.then(
        function(data) {
            songList = data;
        },
        function(error) {
            console.log("error", error);
        }
    );

    return {
        loadSongs: function() {
            return songPromise;
        },
        getSongs: function() {
            return songList;
        // },
        // addNewSong: function(newSong) {
        //     songList.push(newSong);
        //     return songList;
        }
    };
}]);