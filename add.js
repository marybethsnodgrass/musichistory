/*
// Create event handler for HTML DOM element
1. var <element name> = document.getElementById("<element ID>");
2. <element name>.<event> = <function name>;
3. function <function name> {      };
*/


var addMusicLink = document.getElementById("add-music-link");
var addMusicView = document.getElementById("add-music");

addMusicLink.addEventListener("click", function() {
	addMusicView.classList.add("visible");
	addMusicView.classList.remove("hidden");

	listView.classList.add("hidden");
	listView.classList.remove("visible");

})

