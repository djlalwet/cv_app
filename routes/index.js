var express = require('express');
var router = express.Router();

// connect to database
// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var User = require('../public/javascripts/user.js');
var Language = require('../public/javascripts/language.js');
var languagesinfo = require('../public/javascripts/languages.js');

// console.log("connecting...")
// mongoose.connect('mongodb://localhost/test');
// console.log ("connection successful");

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("in router");
  console.log(languagesinfo);

  if (req.session.show_all){
    res.render('index', { title: 'DL', languages: languagesinfo, show_all: true });
  }
  else{
    res.render('index', { title: 'DL', languages: languagesinfo, show_all: false });
  }

});

router.post('/', function(req, res, next) {

  console.log(req.body.password);
  var password = req.body.password;

  if ("dan" === password)
  {
    req.session.show_all = true;
  }
  else{
    req.session.show_all = false;
  }
  res.redirect('/');

});

router.post('/clear', function(req, res, next) {

  req.session.show_all = false;
  res.redirect('/');

});

module.exports = router;
