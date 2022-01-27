require("dotenv").config();

const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.get("/api/currency", (req, res) => {
  res.status(200).json({ status: "ok" });
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
