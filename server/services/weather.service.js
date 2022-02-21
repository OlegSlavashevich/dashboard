const fetch = require("node-fetch");
const { weatherApi } = require("../utils/constants");

class WeaherService {
  async getWeatherByCity(city) {
    const weather = await fetch(`${weatherApi}&q=${city}`)
      .then((data) => data.json())
      .then((data) => ({
        city,
        temp: data.main.temp,
        icon: data.weather[0].icon,
      }));
    return weather;
  }
}

module.exports = new WeaherService();
