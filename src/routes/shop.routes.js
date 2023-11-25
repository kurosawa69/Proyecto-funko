const express = require('express')
const router = express.Router()


router.get('/shop', (req, res) => res.send('route for shop view'))
router.get('/shop/item/:id', (req, res) => res.send('route for item id view'))
router.post('/shop/item/:id/add', (req, res) => res.send('route for agregar view'))
router.get('/shop/cart', (req, res) => res.send('route for carrito view'))


module.exports = router