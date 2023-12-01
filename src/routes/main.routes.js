const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main.controller')

router.get('/', (req, res) => res.render('index'))
router.get('/home', (req, res) => res.render('index'))
router.get('/contact', (req, res) => res.send('route for contact view'))
router.get('/about', (req, res) => res.send('route for about view'))
router.get('/faqs', mainController.faqs)
module.exports = router