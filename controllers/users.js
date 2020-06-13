const User = require('../models/user');

module.exports = {
  userIndex,
  index,
  addPatient,
  create
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
    User.patientInfo.push(req.body);
    console.log(req.body)
    res.render('user', {user: req.user});
}

