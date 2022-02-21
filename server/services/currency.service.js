const fetch = require("node-fetch");
const { currencyApi } = require("../utils/constants");

class CurrencyService {
  async getRatio(base, target) {
    const currency = await fetch(`${currencyApi}&base_currency=${base}`)
      .then((data) => data.json())
      .then((data) => ({
        base,
        target,
        ratio: data.data[target],
      }));
    return currency;
  }
}

module.exports = new CurrencyService();
