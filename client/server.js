const PORT = 3030

const app = require('express')()
const http = require('http').Server(app)
const path = require('path')


app.set('views', path.join(__dirname + '/public/views'))
app.use('/', require("./routes.js"))

http.listen(PORT)
console.log("Server started on port " + PORT)