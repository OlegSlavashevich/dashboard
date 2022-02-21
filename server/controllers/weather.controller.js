const weatherService = require("../services/weather.service");

class WeatherController {
  async get(req, res) {
    const { query } = req;
    const { city } = query;
    try {
      const weather = await weatherService.getWeatherByCity(city);
      res.status(200).json(weather);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = new WeatherController();
