const fs = require("fs");
const path = require("path");

module.exports = {
  shop: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop.ejs"));
  },
  cart: (req, res) => {
    res.render(path.resolve(__dirname, "../views/cart.ejs"));
  }
};
