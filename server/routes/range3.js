const express = require("express");
const restaurantFile = __dirname + "/../models/price_range_3.json";
const restaurant = require(restaurantFile);
const restaurantRouter = express.Router();

restaurantRouter.get("/", (req, res) => {
  res.send(restaurant);
});

module.exports = restaurantRouter;
