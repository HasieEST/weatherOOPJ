//LS Object
const ls = new LS()
//City on load
const defaultCity = ls.getCity()
//Weather object
const weather = new Weather(defaultCity)
//UI Object
const ui = new UI()

//events
const form = document.querySelector('#change-city')
form.addEventListener('submit', changeWeather)

//Change weather
function changeWeather(event){
    const city = document.querySelector('#city-name').value
    weather.changeCity(city)
    ls.setCity(city)
    getWeather()
    document.querySelector('#city-name').value = ''
    event.preventDefault()
}


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