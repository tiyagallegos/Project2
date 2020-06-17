const Note = require('../models/feeding');
const Setup = require('../models/setup');
const User = require('../models/user');

   module.exports = {
      index,
      show,
      new: newfeeding,
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
      res.render('feedings/show', `Setups: ${setup.feedingSchema}`, setups);
  }
   
  function newfeeding(req, res) {
    req.body.aspiration = !!req.body.aspiration 
    Setup.find(req.params.id, function(err, setup) {
    setup.feedingSchema.push(req.body);
    setup.save(function(err, setup) {
        res.render('feedings/show')
    });
    console.log(`Setups: ${setup.feedingSchema}`);
});
}
