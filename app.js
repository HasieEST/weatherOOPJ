//Weather object
const weather = new Weather('Tallinn')
//UI Object
const ui = new UI()


//Get City weather
function getWeather() {
    weather.getWeather()
        .then(data => {
            console.log(data)
            ui.drawWeather(data)
        })
        .catch(error => console.log(error))
}

getWeather()