const { pizzaScrapper } = require("../utils/scrapper");

class PizzaService {
  async order(params) {
    return await pizzaScrapper(params);
  }
}

module.exports = new PizzaService();
