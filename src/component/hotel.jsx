import React from 'react'

export default async function hotel() {
    const city = document.getElementById("city").value;

    const url = "https://hotels4.p.rapidapi.com/locations/search?query=" + city + "&locale=en_US";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2781bf6cfbmsh1459af2c280abf0p1e4303jsn64f0e7a89e97',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        var res = result;
    } catch (error) {
        console.error(error);
    }

    console.log(res.suggestions[1].entities[0].name);

    var hotelList = res.suggestions[1].entities;

    var table = "<tr><th>Latitude</th><th>Longitude</th><th>Caption</th><th>Name</th></tr>";
	  for (var i = 0; i < hotelList.length; i++) {
		var latitude = hotelList[i].latitude;
		var longitude = hotelList[i].longitude;
		var caption = hotelList[i].caption;
		var name = hotelList[i].name;
		table += "<tr><td>" + latitude + "</td><td>" + longitude + "</td><td>" + caption + "</td><td>" + name + "</td></tr>";
	  }

    document.getElementById("hotelTable").innerHTML = table;

    return (
        null
    )
}
