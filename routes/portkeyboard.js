var express = require('express');
var portmap = require('../singletons/portmap');
var router = express.Router();
const keyboard = require('../singletons/keyboard');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'BadKBD - port edition' });
});

router.get('/read', (req, res) => {
    res.send(keyboard.buffer);
});

router.get('/internal/broadcast', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(portmap));
});

module.exports = router;
