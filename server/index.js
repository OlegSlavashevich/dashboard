require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const fs = require("fs");
const widgetsJSON = require("./widgets.json");
const { pizzaScrapper } = require("./scrapper");

const PORT = process.env.PORT || 5000;

const currencyApi = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.CURRENCY_KEY}`;

const app = express();

const weatherApi = `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.WEATHER_KEY}&units=metric`;

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.get("/api/widgets", (req, res) => {
  res.status(200).json(widgetsJSON);
});

app.post("/api/widgets", (req, res) => {
  const { widgets } = req.body;
  fs.writeFileSync(
    `${process.cwd()}/widgets.json`,
    JSON.stringify(widgets, null, 2)
  );
  res.status(200).json({ status: "ok" });
});

app.get("/api/currency", async (req, res) => {
  const { query } = req;
  const { base, target } = query;
  try {
    const currency = await fetch(`${currencyApi}&base_currency=${base}`)
      .then((data) => data.json())
      .then((data) => ({
        base,
        target,
        ratio: data.data[target],
      }));
    res.status(200).json(currency);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/api/weather", async (req, res) => {
  const { query } = req;
  const { city } = query;
  try {
    const weather = await fetch(`${weatherApi}&q=${city}`)
      .then((data) => data.json())
      .then((data) => ({
        city,
        temp: data.main.temp,
        icon: data.weather[0].icon,
      }));
    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/api/pizza", async (req, res) => {
  try {
    const { name } = req.query;
    const imageBuffer = await pizzaScrapper(name);
    res.send(imageBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
