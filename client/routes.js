const express = require('express')
const router = express.Router()


router.get('/creer', function(req, res) {
    res.render("creerBot.ejs")
})

router.get('/bots', function(req, res) {
    res.render("listeBots.ejs")
})

router.get('/discussion/:idBot', function(req, res) {
    id = req.params.idBot
    res.render("chat.ejs", { id: id })
})



router.use(function(req, res) {
    res.render("listeBots.ejs")
})


module.exports = router