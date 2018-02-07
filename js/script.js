// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
// DOCUMENT READY FUNCTION
$(document).ready(function() {

	// Songs
	var mySong = {
		title: "God's Plan",
		artist: "Drake",
		"mp3-url": "https://open.spotify.com/track/2XW4DbS6NddZxRPm5rMCeY",
		"image-url": "http://www.southpawer.com/wp-content/uploads/2018/01/Drake-Scary-Hours.jpg",
	};

	var myPlayList = [
		{
			title: "Passionfruit",
			artist: "Drake",
			mp3_url: "https://open.spotify.com/track/5mCPDVBb16L4XQwDdbRUpz",
			image_url: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f6/06/40/f60640a0-3486-975e-8677-3e19476c34f0/UMG_cvrart_00602557579376_01_RGB72_1800x1800_17UMGIM85032.jpg/1200x630bb.jpg",
		},
		{
			title: "Fake Love",
			artist: "Drake",
			mp3_url: "https://open.spotify.com/track/343YBumqHu19cGoGARUTsd",
			image_url: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f6/06/40/f60640a0-3486-975e-8677-3e19476c34f0/UMG_cvrart_00602557579376_01_RGB72_1800x1800_17UMGIM85032.jpg/1200x630bb.jpg",
		},
		{
			title: "Madiba Riddim",
			artist: "Drake",
			mp3_url: "https://open.spotify.com/track/76gUmNLXGQVOsGhfcshkFP",
			image_url: "<img> https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/f6/06/40/f60640a0-3486-975e-8677-3e19476c34f0/UMG_cvrart_00602557579376_01_RGB72_1800x1800_17UMGIM85032.jpg/1200x630bb.jpg </img>",
		}
	];

	displayList(myPlayList);



});

function displayList(playlist) {


	for (var i = 0; i < playlist.length; i = i + 1) {
		var title = playlist[i].title;

		var artist = playlist[i].artist;

		var mp3_url = playlist[i].mp3_url;

		var image_url = playlist[i].image_url;


		$(".songs").append('<p>' + title + artist + mp3_url + image_url + '</p>');
	}

}



function clearList() {

 $('.songs').empty();

}

function addSong() {




}

$('button').click(function() {

var title = $("title").val();

var artist = $("artist").val();

var mp3_url = $("mp3_url").val();

var image_url = $("image_url").val();
	
});