const Setup = require('../models/setup');
const User = require('../models/user');

module.exports = {
    newSetup,
    userIndex,
    index,
    show,
    newPage,
    feedingPage,
    showPage
    
    
};


function userIndex(req, res, next) {
    User.find({}, function(err, users) {
     res.render('setups/', {
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
        res.redirect(`/setups/${setup._id}/feedings/new`);
    });
}




function index(req, res) {
    res.render('setups', { user: req.user});
}

function newPage(req, res) {
    res.render('setups/new', { user: req.user, patientid: req.params.id });
}
function feedingPage(req, res) {
    res.render('feedings/new', { user: req.user, setupId: req.params.id});
}

    function show(req, res) {
        res.render('setups/show',{users, user: req.user, setups: req.user.patientInfo, p: req.user} );
       }


       function showPage(req, res) {
        res.render('setups/show',{user: req.user, setup: req.body, setupId: req.params.id} );
       }


//const setup = new setup(req.body);
//setup.save(function(err) {
//    if (err) return res.render('setups/new');
//    console.log(setup);
//    res.redirect('/setups/new');
//})