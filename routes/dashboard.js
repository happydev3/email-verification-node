var express = require('express');
var router = express.Router();
var dashboard = require('../controller/dashboard');

router.get('/', isLoggedIn, dashboard.index);
router.get('/index', isLoggedIn, dashboard.index);
router.get('/fund', isLoggedIn, dashboard.fund);
router.get('/voting', isLoggedIn, dashboard.voting);
router.get('/withdrawal', isLoggedIn, dashboard.withdrawal);
router.get('/cards', isLoggedIn, dashboard.cards);
router.get('/roadmap', isLoggedIn, dashboard.roadmap);

//Middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated() && req.user.active == true){
      return next();
  }
  else{
      res.redirect('/');
  }
}

module.exports = router;