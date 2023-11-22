const express = require('express')
const app = express()
const PORT = 4004
const mainRoutes = require('./src/routes/main.routes')


app.use(express.static('public_html'))
app.use('/', mainRoutes)





app.listen(PORT, () => console.log(`iniciando servidor en puerto http://localhost:${PORT}`))