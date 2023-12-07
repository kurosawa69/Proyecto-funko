const fs = require('fs')
const path = require('path')

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, "../views/auth/login.ejs"))
        
    },
    register: (req, res) => {
        res.render('register')
    }
}