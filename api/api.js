const express = require('express')
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')

const Bot = require('./Bot.js')
const Bots = require('./Bots.js')

const bots = new Bots()
router.use(bodyParser.json())

router.use(cors())
const corsOptions = {
    origin: 'http://localhost:3030',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200
}

router.get('/chatbots', cors(corsOptions), function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.json(bots.getBots())
})

router.post('/chatbots', cors(corsOptions), function(req, res) {
    console.log("Bien reçu !")
    if (req.is('json')) {
        let bot = bots.addBot(req.body)
        Bot.nextId++
            res.setHeader('Content-Type', 'application/json')
        res.json(bot)
    } else {
        res.setHeader('Content-Type', 'text/plain')
        res.status(400).status("Le type doit être JSON")
    }
})

router.get('/chatbots/:idBot', cors(corsOptions), function(req, res) {
    let bot = bots.getBot(parseInt(req.params.idBot))
    if (bot != undefined) {
        res.setHeader('Content-Type', 'application/json')
        res.json(bot)
    } else {
        res.status(404).send("Bot introuvable !")
    }
})

router.put('/chatbots/:idBot', cors(corsOptions), function(req, res) {
    res.setHeader('Content-Type', 'application/json')
    if (req.is('json')) {
        let bot = bots.updateBot(req.body)
        if (bot == undefined) {
            res.status(404).send("Bot introuvable !")
        } else {
            res.json(bot)
        }
    } else {
        res.status(400).send("Le type doit être JSON");
    }
})

router.delete('/chatbots/:idBot', cors(corsOptions), function(req, res) {
    let id = bots.deleteBot(parseInt(req.params.idBot));
    if (id != undefined) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send("OK")
    } else {
        res.status(404).send("Bot introuvable !");
    }
})

router.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.status(404).send("Page introuvable")
})

module.exports = router