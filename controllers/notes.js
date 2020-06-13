const Note = require('../models/note');
const Setup = require('../models/setup');
const User = require('../models/user');

   module.exports = {
      index,
      show,
      new: newComment,
      userIndex
   };

   function userIndex(req, res, next) {
    User.find({}, function(err, users) {
     res.render('setups/index', {
      users,
      user: req.user
      });
   });
  }

   function index(req, res) {
     Setup.find({}, function(err, setups) {
       res.render('notes', {
         setups});
       })
   }

   function show(req, res) {
    Setup.find({}, function(err, setups) {
      res.render('notes/show', {
        setups});
      })
  }
   
  function newComment(req, res) {
    Setup.find({}, function(err, setups) {
      res.render('notes/new', {
        setups});
      })
  }
  

     
