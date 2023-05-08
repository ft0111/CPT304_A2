import { render } from '@testing-library/react';
import React from 'react'

export default async function holidy() {
    const year = document.getElementById("year").value;
    const countrycode = document.getElementById("country").value;

    const url = 'https://public-holiday.p.rapidapi.com/' + year + "/" + countrycode;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '2781bf6cfbmsh1459af2c280abf0p1e4303jsn64f0e7a89e97',
            'X-RapidAPI-Host': 'public-holiday.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result);
        var res = result;
    } catch (error) {
        console.error(error);
    }

    var holidays = res;
    console.log(holidays)
    var table = "<tr><th>Name</th><th>Local Name</th><th>Date</th></tr>";
    for (let i = 0; i < holidays.length; i++) {
        table += "<tr><td>" + holidays[i].name + "</td><td>" + holidays[i].localName + "</td><td>" + holidays[i].date + "</td></tr>";
    }
    document.getElementById("holidayTable").innerHTML = table;

    return (
        null
    )
}
