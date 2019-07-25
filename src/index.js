const express = require("express");
const request = require("request");
const serverless = require("serverless-http");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  const randomFact = await getRandomFact();
  console.log("randomFact ", randomFact);
  res.send(randomFact.text);
});

const getRandomFact = async () => {
  const fact = await axios.get(
    "https://uselessfacts.jsph.pl/random.json?language=en"
  );
  return fact.data;
};

app.listen(port, () => {
  console.log("server is up on port " + port);
});
