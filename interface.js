class Weather {
    constructor(city, country, conditions, temp) {
        this.city = city;
        this.country = country;
        this.conditions = conditions;
        this.temp = temp;
    }
}

const CONDITIONS = ["sun", "rain", "wind", "snow", "hail", "storm", "cloudy", "partlyCloudy", "fog", "snowAndRain"];

function weatherFor(city) {
    let normalizeCity = txtNormalize(city);
    let url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + normalizeCity + ', ak")&format=json&env=store://datatables.org/alltableswithkeys';
    let tempConvert = weatherFor;
    $.getJSON(url)
        .done(function (yahooWeather) {
            console.log("JSON Data: " + yahooWeather);
            let city = yahooWeather.query.results.channel.location.city;
            let cuntry = yahooWeather.query.results.channel.location.country;
            let temp = yahooWeather.query.results.channel.item.condition.temp;
            let conditions = "rain";
            let tempUnit = yahooWeather.query.results.channel.units.temperature;
            if (tempUnit === "F") {
                temp = (temp - 32) / 1.8;
            }
            renderWeather(new Weather(city, cuntry, conditions, Math.round(temp)));
        })
        .fail(function (jqxhr, textStatus, error) {
            handleError(textStatus, error);
        });
}

function renderWeather(weather){
    console.log(weather);
}
function handleError(status, error){
    let err = textStatus + ", " + error;
    console.log("Request Failed: " + err);
}

function txtNormalize(city) {
    return city.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
}

$(document).ready(function () {
    console.log("ready!");
    weatherFor("wroclaw");
});