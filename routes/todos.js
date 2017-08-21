'use strict';
var router = require('express').Router();
var AV = require('leanengine');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express22' });
});


module.exports = router;


