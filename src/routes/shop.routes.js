const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.controller");

router.get("/shop", shopController.shop);
router.get("/item/:id", (req, res) => res.send("route for item id view"));
router.post("/item/:id/add", (req, res) => res.send("route for agregar view"));
router.get("/cart", shopController.cart);
router.post("/cart", (req, res) => res.send("route for add item to cart view "));

module.exports = router;
