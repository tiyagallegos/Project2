const Setup = require('../models/setup');
const User = require('../models/user');

module.exports = {
    new: newSetup,
    userIndex,
    index,
    show,
    feeding
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
    req.body.tools = !!req.body.tools
    Setup.create(req.body, function(err, setup) {
        console.log(err, setup);
        res.redirect('/setups/index');
    });
}

function feeding(req, res) {
    req.body.aspiration = !!req.body.aspiration 
    Setup.find(req.params.id, function(err, setup) {
    setup.feedingSchema.push(req.body);
    setup.save(function(err, setup) {
        res.render('setups/show')
    });
    console.log(`Setups: ${setup.feedingSchema}`);
});
}


function index(req, res) {
    res.render('setups/index', {setups: req.user.patientInfo, p: req.user});
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