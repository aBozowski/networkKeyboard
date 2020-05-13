const portmap = require('./singletons/portmap');
const keyboard = require('./singletons/keyboard');
const http = require('http');
const express = require('express');
const logger = require('morgan');

const createPortHandler = (charcode) => {

    let tempapp = express();
    let character = String.fromCharCode(charcode);

    tempapp.disable('etag');
    tempapp.use(logger('dev'));

    tempapp.get('/', function(req, res, next) {
        keyboard.addKey(character);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({'state':'accepted','character':character}));
    });

    let tempserver = http.createServer(tempapp);
    tempserver.listen(0);
    let port = tempserver.address().port;

    console.log('Character '+character+' listening on port ' + port);
    portmap[charcode] = port;

};

module.exports = createPortHandler;
