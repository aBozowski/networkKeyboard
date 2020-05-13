const portmap = require('../singletons/portmap');
const keyboard = require('../singletons/keyboard');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'BadKBD - port edition' });
});

router.get('/read', (req, res) => {
    res.end(keyboard.buffer);
});

router.get('/internal/broadcast', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(portmap));
});

module.exports = router;
