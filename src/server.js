const express = require('express')
const app = express()
const modules = require('./modules')
const PORT = process.env.PORT || 9000

app.use(express.json())
app.use(modules)

app.listen(PORT, console.log(PORT))