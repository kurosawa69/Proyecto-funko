const express = require('express')
const app = express()
const PORT = 4004
const mainRoutes = require('./src/routes/main.routes')
const shopRoutes = require('./src/routes/shop.routes')
const adminRoutes = require('./src/routes/admin.routes')
const authRoutes = require('./src/routes/auth.routes')


app.use(express.static('public_html'))
app.use('/',  mainRoutes, shopRoutes, adminRoutes, authRoutes)





app.listen(PORT, () => console.log(`iniciando servidor en puerto http://localhost:${PORT}`))