import React from 'react'

// Get the hotel data from the API with a given city name
export default async function hotel() {
    // Get the city name from the HTML document
    const city = document.getElementById("city").value;

    // Build the URL for the API endpoint using the input value
    const url = "https://hotels4.p.rapidapi.com/locations/search?query=" + city + "&locale=en_US";
    // Set options for the fetch request, including headers with API key and host information
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ecbfde7649mshc41d8a704b9697ep1110d8jsn15f5f81515ce',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

    // Make the fetch request to the API endpoint
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        var res = result;
    } catch (error) {
        console.error(error);
    }

    // Get the latitude and longitude values from the API response
    console.log(res.suggestions[1].entities[0].name);
    // Create a HTML table string to display the hotel data
    var hotelList = res.suggestions[1].entities;
    var table = "<tr><th>Latitude</th><th>Longitude</th><th>Caption</th><th>Name</th></tr>";

    // Loop through the hotelList array and add a row for each hotel to the tableHtml string
	for (var i = 0; i < hotelList.length; i++) {
		var latitude = hotelList[i].latitude;
		var longitude = hotelList[i].longitude;
		var caption = hotelList[i].caption;
		var name = hotelList[i].name;
		table += "<tr><td>" + latitude + "</td><td>" + longitude + "</td><td>" + caption + "</td><td>" + name + "</td></tr>";
	}

    // Display the hotel data in the HTML document by setting the innerHTML of an element with ID "hotelTable"
    document.getElementById("hotelTable").innerHTML = table;

    return null;
}
