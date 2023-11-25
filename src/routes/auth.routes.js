const express = require('express')
const router = express.Router()


router.get('/auth/login', (req, res) => res.send('route for auth login get view'))
router.post('/auth/login', (req, res) => res.send('route for auth login post view'))
router.get('/auth/register', (req, res) => res.send('route for auth register get view'))
router.post('/auth/register', (req, res) => res.send('route for auth register post view'))
router.get('/auth/logout', (req, res) => res.send('route for auth logout view'))


module.exports = router