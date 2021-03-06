function createConditionMap() {
    let myMap = new Map();

    myMap.set("tornado", "storm");
    myMap.set("tropical storm", "storm");
    myMap.set("hurricane", "storm");
    myMap.set("severe thunderstorms", "storm");
    myMap.set("thunderstorms", "storm");
    myMap.set("mixed rain and snow", "snowAndRain");
    myMap.set("mixed rain and sleet", "rain");
    myMap.set("mixed snow and sleet", "snowAndRain");
    myMap.set("freezing drizzle", "rain");
    myMap.set("drizzle", "rain");
    myMap.set("freezing rain", "rain");
    myMap.set("showers", "rain");
    myMap.set("snow flurries", "snow");
    myMap.set("light snow showers", "snow");
    myMap.set("blowing snow", "snow");
    myMap.set("snow", "snow");
    myMap.set("hail", "hail");
    myMap.set("sleet", "snow");
    myMap.set("dust", "fog");
    myMap.set("foggy", "fog");
    myMap.set("haze", "fog");
    myMap.set("smoky", "fog");
    myMap.set("blustery", "wind");
    myMap.set("windy", "wind");
    myMap.set("cold", "wind");
    myMap.set("cloudy","cloudy");
    myMap.set("mostly cloudy (night,)", "cloudy");
    myMap.set("mostly cloudy (day,)", "cloudy");
    myMap.set("partly cloudy (night,)", "partlyCloudy");
    myMap.set("partly cloudy (day,)", "partlyCloudy");
    myMap.set("clear (night,)", "sun");
    myMap.set("sunny", "sun");
    myMap.set("fair (night,)", "sun");
    myMap.set("fair (day,)", "sun");
    myMap.set("mixed rain and hail", "hail");
    myMap.set("hot", "sun");
    myMap.set("isolated thunderstorms", "storm");
    myMap.set("scattered thunderstorms", "storm");
    myMap.set("scattered showers", "rain");
    myMap.set("heavy snow", "snow");
    myMap.set("scattered snow showers", "snow");
    myMap.set("partly cloudy", "partlyCloudy");
    myMap.set("thundershowers", "storm");
    myMap.set("snow showers", "snow");
    myMap.set("isolated thundershowers", "storm");
    myMap.set("not available", "sun");
    return myMap;
}
