const Router = require("express").Router;

const widgetsController = require("../controllers/widgets.controller");
const weatherController = require("../controllers/weather.controller");
const currencyControler = require("../controllers/currency.controller");
const pizzaController = require("../controllers/pizza.controller");

const router = new Router();

router
  .get("/widgets", widgetsController.get)
  .post("/widgets", widgetsController.set);

router.get("/weather", weatherController.get);

router.get("/currency", currencyControler.get);

router.post("/pizza", pizzaController.order);

module.exports = router;
