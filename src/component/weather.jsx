import React from 'react'

// Get the city name and date from the HTML document with given "city" and "date"
export default async function weather() {
    // Get the city name and date from the HTML document
    const city = document.getElementById("city").value;
    const date = document.getElementById("date").value;

    // Build the URL for the API endpoint using the input value
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + city + '/' + date + '?unitGroup=metric&key=N45W734X4J7FMEHDVHSVYRLQJ&contentType=json';
    // Set options for the fetch request, including headers with API key and host information
    const options = {
        method: 'GET',
    };

    // Make the fetch request to the API endpoint
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        var res = result.days[0];
    } catch (error) {
        console.error(error);
    }

    //  Create a HTML table string to display the weather data
    var table = '<tr><th>weather</th><th>date</th><th>max temp</th><th>min temp</th></tr>';
    var weather = '';
    weather += "<tr><td>" + res.conditions;
    weather += "</td><td>" + res.date;
    weather += "</td><td>" + res.tempmin;
    weather += "</td><td>" + res.tempmax;
    weather += "</td></tr>";
    table += weather;

    // Display the weather data in the HTML document by setting the innerHTML of an element with ID "weatherTable"
    document.getElementById("weatherTable").innerHTML = table;

    return null;
}
