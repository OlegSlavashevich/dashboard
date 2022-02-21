const widgetsService = require("../services/widgets.service");

class WidgetsController {
  get(req, res) {
    try {
      const widgets = widgetsService.getAll();
      res.status(200).json(widgets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }

  set(req, res) {
    try {
      const { widgets } = req.body;
      widgetsService.set(widgets);
      res.status(200).json({ status: "ok" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  }
}

module.exports = new WidgetsController();
