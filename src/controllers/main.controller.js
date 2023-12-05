const fs = require('fs')
const path = require('path')

module.exports = {
    home: (req, res) => {
        res.render('index')
    },
    contact: (req, res) => {
        res.send('ruta de contacto')
    },
    about: (req, res) => {
        res.send('sobre nosotros')
    },
    faqs: (req, res) => {
        res.send('preguntas frecuentes')
    }

}