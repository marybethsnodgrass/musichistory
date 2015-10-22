$(document).ready(function() {

	var listLink = document.getElementById("list-music-link");
	var listView = document.getElementById("list-music");
	var addMusicLink = document.getElementById("add-music-link");
	var addMusicView = document.getElementById("add-music");


	listLink.addEventListener("click", function() {
		listView.classList.add("visible");
		listView.classList.remove("hidden");

		addMusicView.classList.add("hidden");
		addMusicView.classList.remove("visible");
	});


	addMusicLink.addEventListener("click", function() {
		addMusicView.classList.add("visible");
		addMusicView.classList.remove("hidden");

		listView.classList.add("hidden");
		listView.classList.remove("visible");
	})

});
