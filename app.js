const express = require('express')
const app = express()

app.use(express.static('public_html'))

const PORT = 4004

app.get('/', (req , res) => res.send('algo'))

app.listen(PORT, () => console.log(`iniciando servidor en puerto http://localhost:${PORT}`))