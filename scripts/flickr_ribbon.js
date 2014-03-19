/*****
Returns recent photos from my flickr profile to display on the main page
of my personal site. The goal here was to write it from scratch without JQuery,
which I tend to sort of lean on.
*****/

function loadXMLDoc() {
	var xmlhttp = new XMLHttpRequest();

	// Flickr user ID number and api key.
	var apiKey = "9f29de4585287ce5d76c099f63c726e6";
	var user = "89351685%40N00";
	// Total number of photos to return.
	var photo_count = 5;

	var url = "http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=" 
						+ apiKey + "&user_id=" + user + "&per_page=" + photo_count + "&format=json&nojsoncallback=1";

	xmlhttp.open("GET", url, false);

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status == 200 || xmlhttp.status == 0) {
				jResponse = xmlhttp.responseText;
			}
		} else {
			alert("Error: " + xmlhttp.statusText);
		}
	};

	xmlhttp.send("");
	return jResponse;
};

var jResponse = JSON.parse(loadXMLDoc());

var recentPhotos = jResponse.photos.photo;

for (photo in recentPhotos) {
	var farm_id = recentPhotos[photo].farm;
	var server_id = recentPhotos[photo].server;
	var id = recentPhotos[photo].id;
	var secret = recentPhotos[photo].secret;

	// Static path to single photo.
	source_path = "http://farm" + farm_id + ".staticflickr.com/" + server_id + "/" + 
					id + "_" + secret + ".jpg";

	// Path to photo within user profile.
	profile_path = "http://www.flickr.com/photos/dostoy320/" + id;

	var list = document.createElement("li");
	var link = document.createElement("a");
	var image = document.createElement("img");
	link.href = profile_path;
	image.src = source_path;
	link.appendChild(image);
	list.appendChild(link);
	var main = document.getElementById('flickr_list');
	main.appendChild(list);
};






