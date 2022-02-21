const currenctService = require("../services/currency.service");

class CurrencyController {
  async get(req, res) {
    const { query } = req;
    const { base, target } = query;
    try {
      const currency = await currenctService.getRatio(base, target);
      res.status(200).json(currency);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = new CurrencyController();
