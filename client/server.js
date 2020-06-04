const PORT = 3030

const express = require('express')
const app = express()
const path = require('path')


app.set('views', path.join(__dirname + '/public/views'))
app.use('/public', express.static('public'))

const http = require('http').Server(app)

app.use('/', require("./routes.js"))

http.listen(PORT)
console.log("Server started on port " + PORT)