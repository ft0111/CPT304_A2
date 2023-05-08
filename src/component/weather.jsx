import React from 'react'

export default async function weather() {
    const cityName = document.getElementById("city").value;
    const datetime = document.getElementById("date").value;

    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + cityName + '/' + datetime + '?unitGroup=metric&key=N45W734X4J7FMEHDVHSVYRLQJ&contentType=json';
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        var res = result.days[0];
    } catch (error) {
        console.error(error);
    }

    var table = '<tr><th>weather</th><th>datetime</th><th>max temp</th><th>min temp</th></tr>';
    var weather = '';
    weather += "<tr><td>" + res.conditions;
    weather += "</td><td>" + res.datetime;
    weather += "</td><td>" + res.tempmin;
    weather += "</td><td>" + res.tempmax;
    weather += "</td></tr>";
    table += weather;

    document.getElementById("weatherTable").innerHTML = table;

    return (
        null
    )
}
