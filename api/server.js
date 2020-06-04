const PORT = 8080

const bodyParser = require('body-parser');
const app = require('express')()
const http = require('http').Server(app)

app.use('/api', require("./api.js"))
app.use(bodyParser.urlencoded({ extended: false }))


http.listen(PORT)
console.log("Server started on port " + PORT)