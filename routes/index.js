var express = require('express');
var router = express.Router();
var User = require('../public/javascripts/user.js');
var Language = require('../public/javascripts/language.js');
var languagesinfo = require('../public/javascripts/languages.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CV - Daniel Lalwet',
    languages: languagesinfo, show_all: req.session.show_all });
});

router.post('/', function(req, res, next) {

  req.session.show_all = false;

  if ("dan" === req.body.password)
  {
    req.session.show_all = true;
  }

  res.redirect('/');

});

router.post('/clear', function(req, res, next) {

  req.session.show_all = false;
  res.redirect('/');

});

module.exports = router;
