const express = require('express')
const app = express()
const modules = require('./modules')

app.use(express.json())
app.use(modules)

app.listen(9000, console.log(9000))