class Weather {
    constructor(city, country, conditions, temp) {
        this.city = city;
        this.country = country;
        this.conditions = conditions;
        this.temp = temp;

    }
}

const CONDITIONS = ["run", "rain", "wind", "snow", "hail", "storm", "cloudy", "partlyCloudy", "fog", "snowAndRain"];

function weatherFor(city) {
    let normalizeCity = txtNormalize(city);
    let url = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + normalizeCity + ', ak")&format=json&env=store://datatables.org/alltableswithkeys';
    $.getJSON(url)
        .done(function( yahooWeather ) {
            console.log( "JSON Data: " + yahooWeather);
            return Weather("wroclaw","polska","sun", 24);

        })
        .fail(function( jqxhr, textStatus, error ) {
            let err = textStatus + ", " + error;
            console.log( "Request Failed: " + err );
            return null;
        });
}

function txtNormalize(city) {
    return city.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase()
}

