const pizzaService = require("../services/pizza.service");

class PizzaController {
  async order(req, res) {
    try {
      const body = req.body;
      const imageBuffer = await pizzaService.order(body);
      res.send(imageBuffer);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  }
}

module.exports = new PizzaController();
