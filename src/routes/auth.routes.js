const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')


router.get('/login', authController.login)
router.post('/auth/login', (req, res) => res.send('route for auth login post view'))
router.get('/auth/register', authController.register)
router.post('/auth/register', (req, res) => res.send('route for auth register post view'))
router.get('/auth/logout', (req, res) => res.send('route for auth logout view'))


module.exports = router