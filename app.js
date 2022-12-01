document.addEventListener('DOMContentLoaded', cityWeather)


function weatherDataFetch(city) {
    const key = '7283fe926a327977fed55a5cb6165e9b';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data)
            drawWeather(data)
        })
        .catch(function () {
            //catch any errors
        })
}

function cityWeather(e) {
    weatherDataFetch('Tallinn')
}

function drawWeather(data) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15)
    document.querySelector('#description').innerHTML = data.weather[0].description
    document.querySelector('#temp').innerHTML = celcius + '&deg;'
    document.querySelector('#location').innerHTML = data.name
}