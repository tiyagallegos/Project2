const User = require('../models/user');

module.exports = {
  userIndex,
  index,
  addPatient
};

function userIndex(req, res, next) {
    User.find({}, function(err, users) {
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
    User.findById(req.params.id, function(err, user)
    user.patients.push(req.body.patientschema);
    user.save(function(err) {
      res.redirect('/users/${user.id}');
    });
  }

