class Weather{
    constructor(city) {
        this.city = city
        this.key = '7283fe926a327977fed55a5cb6165e9b'
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        return await response.json()
    }
    changeCity(city){
        this.city = city
    }
}