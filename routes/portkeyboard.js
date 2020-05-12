var express = require('express');
var portmap = require('../portmap');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'BadKBD - port edition' });
});

var keyboard = '';

router.get('/read', (req, res) => {
    if(keyboard.length == 0)
        res.send("");
    else
        res.send(keyboard);
	return
});

router.get('/internal/type', (req, res) => {
    key = String.fromCharCode(
            parseInt(
                (req.header('PortKeyboard-Forwarded-For'))));
    keyboard += key;
    res.setHeader('Content-Type', 'application/json');
	res.send('{"status":"accepted","key":"'+key+'"}');
});

router.get('/internal/broadcast', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(portmap));
});

module.exports = router;
