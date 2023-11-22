const express = require('express')
const router = express.Router()


router.get('/home', (req, res) => res.send('route for home view'))
router.get('/contact', (req, res) => res.send('route for contact view'))
router.get('/about', (req, res) => res.send('route for about view'))
router.get('/faqs', (req, res) => res.send('route for faqs view'))
module.exports = router