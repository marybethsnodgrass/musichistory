// var songs = [];

// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// songs[songs.length] = "Slide > by Goo Goo Dolls on the album Dizzy Up the Girl"
// songs.unshift = "Kerosene > by Miranda Lambert on the album Kerosene"

// var song0element = document.getElementById('song0');
// var song0text = song0element.innerHTML;

// song0text = songs[0];
// song0element.innerHTML = song0text;


var listLink = document.getElementById("list-music-link");
var listView = document.getElementById("list-music");

listLink.addEventListener("click", function() {
	listView.classList.add("visible");
	listView.classList.remove("hidden");

	addMusicView.classList.add("hidden");
	addMusicView.classList.remove("visible");
})