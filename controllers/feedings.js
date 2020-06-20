const Note = require('../models/feeding');
const Setup = require('../models/setup');
const User = require('../models/user');


   module.exports = {
      index,
      show,
      new: newfeeding,
      userIndex,
      indexForm, 
      create
   };

   function create(req, res) {
     const setupId = req.body.setupId
     delete req.body.setupId
     
    req.body.seating = !!req.body.seating //typecast
    req.body.foodPrep = !!req.body.foodPrep
    req.body.transition = !!req.body.transition
    req.body.tools = !!req.body.tools
    Setup.findById(setupId, function(err, setup) {
      setup.feedingSessions.push(req.body);
      setup.save(function(err, setup) {
        console.log(err, setup)
        res.redirect(`/feedings/${setupId}/show`)
      });
    }
  )};

  
        //make sure this route is defined somewhere
  
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
      res.render('feedings/show', {user: req.user });
  }
   
  function newfeeding(req, res) {
    req.body.aspiration = !!req.body.aspiration 
    Setup.find(req.params.id, function(err, setup) {
    setup.feedings.push(req.body);
    setup.save(function(err, setup) {
        res.render('feedings/show')
    });
    console.log(`Setups: ${setup.feedingSchema}`);
});
}

function indexForm(req, res) {
    res.render('feedings/new', {setupId: req.params.id})
}