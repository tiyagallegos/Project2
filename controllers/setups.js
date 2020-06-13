const Setup = require('../models/setup');
const User = require('../models/user');

module.exports = {
    new: newSetup,
    create,
    userIndex,
    index,
    show
};

function userIndex(req, res, next) {
    User.find({}, function(err, users) {
     res.render('setups/index', {
      users,
      user: req.user
      });
   });
  }

function newSetup(req, res) {
    req.body.seating = !!req.body.seating //typecast
    req.body.foodPrep = !!req.body.foodPrep
    req.body.transition = !!req.body.transition
    Setup.create(req.body, function(err, setup) {
        console.log(err, setup);
        res.render('setups/new');

    });
}

function create(req, res) {
    req.body.foodPrep = !!req.body.foodPrep;
}

function index(req, res) {
    res.render('setups/index');
}

    function show(req, res) {
        res.render('setups/show');
       }
//const setup = new setup(req.body);
//setup.save(function(err) {
//    if (err) return res.render('setups/new');
//    console.log(setup);
//    res.redirect('/setups/new');
//})