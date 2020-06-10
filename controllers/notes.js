const Note = require('../models/note');
const Setup = require('../models/setup');
   module.exports = {
      index,
      show,
      
   };


   function index(req, res) {
     Setup.find({}, function(err, setups) {
       res.render('setups/index', {
         setups});
       })
   }
   function show(req, res) {
    Setup.findById(req.params.id, function(err, setup) {
      console.log(setup)
    Setup.find({setup: setup._id}, function(err, setups) {
      res.render('setups/show', { setup, notes });
    });
  });
}
    

     
