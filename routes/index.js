const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const passport = require('passport');
const usersCtrl = require('../controllers/users');


router.get('/', indexCtrl.index);


router.get('/auth/google', passport.authenticate(
    'google',
    {scope: ['profile', 'email']}
  ));
  
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/users',
      failureRedirect : '/'
    }
  ));
  
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  router.get('/users', usersCtrl.index);

  router.get('/navs/gettingstarted', indexCtrl.start)

module.exports = router;