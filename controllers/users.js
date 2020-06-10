const Student = require('../models/student');

module.exports = {
  index,
  addFact,
  delFact
};

function index(req, res, next) {
  Student.find({}, function(err, students) {
   res.render('students/index', {
    students,
    user: req.user
    });
 });
}

function addFact(req, res) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/students');
  });
}

function delFact(req, res) {
  req.user.facts.splice(req.params.id, 1);
  req.user.save(function(err) {
    res.redirect('/students');
  });

}
