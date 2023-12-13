const fs = require('fs')
const path = require('path')

module.exports = {
    login: (req, res) => {
        res.render(path.resolve(__dirname, "../views/auth/login.ejs"), {
            title: "Login"
        })
        
    },
    register: (req, res) => {
        res.render(path.resolve(__dirname, "../views/auth/register.ejs"), {
            title: "Register"
        })
    }
}