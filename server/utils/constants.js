const currencyApi = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_KEY}`;

const weatherApi = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_KEY}&units=metric`;

module.exports = { currencyApi, weatherApi };
