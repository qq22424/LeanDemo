'use strict';
var router = require('express').Router();
var AV = require('leanengine');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });
// router.get('/', function(req, res, next) {
//   res.render('square');
// });
//  router.get('/', function(req, res, next) {
//     res.render('users');
//   });
// router.get('/', function(req, res,next) {
//   res.render('chat');
// });
router.get('/', function(req, res,next) {
  res.render('chatLogin');
});
router.get('/chatRoom', function(req, res,next) {
  res.render('chatRoom');
});
router.get('/login', function(req, res,next) {
  res.render('login');
});
router.get('/register', function(req, res,next) {
    res.render('register');
  });

module.exports = router;


