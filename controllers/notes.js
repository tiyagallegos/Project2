const Note = require('../models/note');
const Setup = require('../models/setup');
   module.exports = {
      index,
      show,
      new: newComment
   };


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
  

     
