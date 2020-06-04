const express = require('express')
const router = express.Router()


router.get('/creer', function(req, res) {
    res.render("creerBot.ejs")
})

router.get('/bots', function(req, res) {
    res.render("listeBots.ejs")
})

router.use(function(req, res) {
    res.render("home.ejs")
})

module.exports = router