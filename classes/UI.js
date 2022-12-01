class UI{
    constructor() {
        this.description = document.querySelector('#description')
        this.temp = document.querySelector('#temp')
        this.city = document.querySelector('#location')
    }

    drawWeather(data) {
        let celsius = Math.round(parseFloat(data.main.temp)-273.15)
        this.description.innerHTML = data.weather[0].description
        this.temp.innerHTML = celsius + '&deg;'
        this.city.innerHTML = data.name
    }
}