define(["jquery"], function($) {
    return {
		clearOldSongs: function() {
			$("#list-of-songs").empty();
			console.log("function running", $("#list-of-songs").html);
		}
	};
});
