import { render } from '@testing-library/react';
import React from 'react'

// An async function that fetches and displays public holidays for a given year and country code
export default async function holiday() {
    // Get the year and country code values from the HTML document
    const year = document.getElementById("year").value;
    const countryCode = document.getElementById("country").value;

    // Build the URL for the API endpoint using the input values
    const url = 'https://public-holiday.p.rapidapi.com/' + year + "/" + countryCode;
    // Set options for the fetch request, including headers with API key and host information
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': 'ecbfde7649mshc41d8a704b9697ep1110d8jsn15f5f81515ce',
            'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
        }
    };

    try {
        // Make the fetch request to the API endpoint
        const response = await fetch(url, options);
        // Parse the response data as JSON
        const result = await response.json();
        var res = result;
    } catch (error) {
        console.error(error);
    }

    var holidays = res;
    console.log(holidays)
    // Create a HTML table string to display the holiday data
    var table = "<tr><th>Name</th><th>Local Name</th><th>Date</th></tr>";

    // Loop through the holidays array and add a row for each holiday to the tableHtml string
    for (let i = 0; i < holidays.length; i++) {
        table += "<tr><td>" + holidays[i].name + "</td><td>" + holidays[i].localName + "</td><td>" + holidays[i].date + "</td></tr>";
    }

    // Display the holiday data in the HTML document by setting the innerHTML of an element with ID "holidayTable"
    document.getElementById("holidayTable").innerHTML = table;

    return null;
}
