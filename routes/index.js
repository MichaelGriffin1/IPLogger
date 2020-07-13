'use strict';
var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.dir(req.ip);
    res.render('index');
});

router.get('/logs', function (req, res) {
    fs.readFile('./logs.txt', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            res.send(404);
        } else {
            res.send(data.toString());
        }
    });
});

module.exports = router;
