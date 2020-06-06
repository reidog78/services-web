const express = require('express')
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser')

const Bot = require('./Bot.js')
const Bots = require('./Bots.js')

const bots = new Bots()
router.use(bodyParser.json())

router.use('/brains', express.static('brains'))

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
    if (req.is('json')) {
        let bot = bots.addBot(req.body)
        let envoi = {}
        Object.assign(envoi, bot)
        envoi.bot = {}
        Bot.nextId++;
        res.setHeader('Content-Type', 'application/json')
        res.json(envoi)
    } else {
        res.setHeader('Content-Type', 'text/plain')
        res.status(400).status("Le type doit être JSON")
    }
})

router.get('/chatbots/:idBot', cors(corsOptions), function(req, res) {
    let bot = bots.getBot(parseInt(req.params.idBot))
    if (bot != undefined) {
        let send = Object.assign(send, bot)
        send.bot = {}
        res.setHeader('Content-Type', 'application/json')
        res.json(send)
    } else {
        res.setHeader('Content-Type', 'text/plain')
        res.status(404).send("Bot introuvable !")
    }
})

router.post('/chatbots/:idBot', cors(corsOptions), function(req, res) {

    if (req.is('json')) {
        let bot = bots.getBot(parseInt(req.params.idBot))
        if (bot == undefined) {
            res.setHeader('Content-Type', 'text/plain')
            res.status(404).send("Bot introuvable !")
        } else {
            if (req.body.username != undefined && req.body.message != undefined) {
                answer = bot.tell(req.body).then((answer) => {
                    res.setHeader('Content-Type', 'application/json')
                    res.status(200).json({
                        username: bot.name,
                        message: answer
                    });
                })

            } else {
                res.setHeader('Content-Type', 'text/plain')
                res.status(400).send("JSON mal formé")
            }
        }
    }

})

router.put('/chatbots/:idBot', cors(corsOptions), function(req, res) {
    if (req.is('json')) {
        let newbot = new Bot(req.body)
        let bot = bots.updateBot(newbot)
        if (bot == undefined) {
            res.setHeader('Content-Type', 'text/plain')
            res.status(404).send("Bot introuvable !")
        } else {
            res.setHeader('Content-Type', 'application/json')
            res.json(bot)
        }
    } else {
        res.setHeader('Content-Type', 'text/plain')
        res.status(400).send("Le type doit être JSON");
    }
})

router.delete('/chatbots/:idBot', cors(corsOptions), function(req, res) {
    let id = bots.deleteBot(parseInt(req.params.idBot));
    if (id != undefined) {
        res.setHeader('Content-Type', 'text/plain');
        res.status(200).send("OK")
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.status(404).send("Bot introuvable !");
    }
})

router.use(function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.status(404).send("Page introuvable")
})

module.exports = router