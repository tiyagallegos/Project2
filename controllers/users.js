const User = require('../models/user');

module.exports = {
  userIndex,
  index,
  addPatient,
  create,
  showAll,
  delPatient,
  showOne
  
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
    req.user.patientInfo.push(req.body);
    req.user.save(function(err){
        console.log(err)
        res.redirect(`users/${req.user._id}`);
   });
}

function showAll(req, res) {
    console.log(req.user.patientInfo)
    res.render('users/show', {user: req.user, p: req.body})  
}

function delPatient(req, res) {
    req.user.patientInfo.pull(req.params.id);
    req.user.save(function(err) {
      res.redirect('/users');
    });
  
  }
  function showOne(req, res) {
   const patient = req.user.patientInfo.id(req.params.id)
   console.log(patient);
    res.render('patients/show', {user: req.user, patient})  
}
  
   
//skill: Skill.getOne(req.params.id),
//skillNum: parseInt(req.params.id) + 1
//    User.find, function(err, users) {
//        console.log(users)
//        res.render('users/show', {users})
//    });
//}


