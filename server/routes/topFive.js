const express = require("express");
const restaurantFile = __dirname + "/../models/top_5_india.json";
const restaurant = require(restaurantFile);
const restaurantRouter = express.Router();

restaurantRouter.get("/", (req, res) => {
  res.send(restaurant);
});

module.exports = restaurantRouter;
