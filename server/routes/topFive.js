const express = require("express");
const restaurantFile = __dirname + "/../models/favorites.json";
const restaurant = require(restaurantFile);
const restaurantRouter = express.Router();

restaurantRouter.get("/", (req, res) => {
  res.send(restaurant);
});

module.exports = restaurantRouter;
