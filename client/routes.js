const express = require('express')
const router = express.Router()

router.use('/public', express.static('public'));
router.use('/api', require('./api.js'))

router.use(function(req, res) {
    res.render("home.ejs")
})

module.exports = router