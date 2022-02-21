const fs = require("fs");
const widgetsDB = require("../db/widgets.json");

class WidgetsService {
  getAll() {
    return widgetsDB;
  }

  set(widgets) {
    fs.writeFileSync(
      `${process.cwd()}/db/widgets.json`,
      JSON.stringify(widgets, null, 2)
    );
  }
}

module.exports = new WidgetsService();
