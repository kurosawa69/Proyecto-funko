const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop.controller')


router.get('/shop', shopController.shop)
router.get('/shop/item/:id', (req, res) => res.send('route for item id view'))
router.post('/shop/item/:id/add', (req, res) => res.send('route for agregar view'))
router.get('/shop/cart', (req, res) => res.send('route for carrito view'))


module.exports = router