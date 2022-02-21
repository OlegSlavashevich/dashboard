require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./router");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use("/api", router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
