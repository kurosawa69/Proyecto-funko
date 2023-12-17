const fs = require('fs')
const path = require('path')
const { title } = require('process')

module.exports = {
    home: (req, res) => {
        res.render(path.resolve(__dirname, "../views/main/index.ejs"),{
        title: "Home"})
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