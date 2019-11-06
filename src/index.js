const express = require("express");
const serverless = require("serverless-http");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const randomFact = await getRandomFact();
  res.send(randomFact.data.text);
});

const getRandomFact = (
  url = "https://uselessfacts.jsph.pl/random.json?language=en"
) => {
  return axios.get(url);
};

app.get("/ip", (req, res) => {
  console.log(req.ip);
  res.send();
});

app.listen(port, () => {
  console.log("server is up on port " + port);
});
