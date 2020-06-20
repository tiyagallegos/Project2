const express = require('express');
const router = express.Router();
const passport = require('passport');
const usersCtrl = require('../controllers/users');

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


  router.get('/patients/:id/edit', usersCtrl.edit);
  router.put('/users/:id', usersCtrl.updatePatient);


  router.get('/users', usersCtrl.index);
  router.post('/users', usersCtrl.create);
  router.get('/users/new', usersCtrl.addPatient);
  router.get('/users/:id', usersCtrl.showAll);
  router.get('/patients/:id/show', usersCtrl.showOne);
  router.delete('/users/:id', usersCtrl.delPatient);
  //router.get('/patients/:id/edit', usersCtrl.updatePatient);

module.exports = router;