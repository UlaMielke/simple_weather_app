class Weather {
    constructor(city, country, conditions, temp){
        this.city = city;
        this.country = country;
        this.conditions =conditions;
        this.temp = temp;

    }
}

const CONDITIONS = ["run", "rain", "wind", "snow", "hail", "storm", "cloudy", "partlyCloudy", "fog", "snowAndRain"];

function weatherFor(city) {
    return Weather("Wrocław", "PL", "snow", 20);
}
