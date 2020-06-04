const PORT = 8080

const bodyParser = require('body-parser');
const express = require('express')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))



const http = require('http').Server(app)

app.use('/api', require("./api.js"))

http.listen(PORT)
console.log("Server started on port " + PORT)