class LS{
    constructor() {
        this.defaultCity = 'Tallinn'
        this.city
    }

    getCity(){
        // null või empty, juhul, kui on salvestatud tühja väljaga vormis
        if(localStorage.getItem('city')=== null||localStorage.getItem('city')=== ""){
            this.city = this.defaultCity
        } else{
            this.city = localStorage.getItem('city')
        }
        return this.city
    }

    setCity(city){
        localStorage.setItem('city', city)
    }
}