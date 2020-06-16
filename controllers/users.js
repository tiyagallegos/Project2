const User = require('../models/user');

module.exports = {
  userIndex,
  index,
  addPatient,
  create,
  show
};

function userIndex(req, res) {
    User.find({}, function(err, users) {
        console.log(users)
     res.render('users/index', {
      users,
      user: req.user
      });
   });
  }

  function index(req, res) {
    res.render('users', {user: req.user});
}

function addPatient(req, res) {
    res.render('users/new', {user: req.user});
}

function create(req, res) {
    console.log(req.user.patientInfo);
    req.user.patientInfo.push(req.body);
    req.user.save(function(err){
        console.log(err)
        res.redirect(`users/${req.user._id}`);
   });
}

function show(req, res) {
    res.render('users/show', {user: req.user})
}
//    User.find, function(err, users) {
//        console.log(users)
//        res.render('users/show', {users})
//    });
//}


