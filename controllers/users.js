const User = require('../models/user');

module.exports = {
  index,
  addComment,
  delComment
};

function index(req, res, next) {
  User.find({}, function(err, users) {
   res.render('users/index', {
    users,
    user: req.user
    });
 });
}

function addComment(req, res) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/users');
  });
}

function delComment(req, res) {
  req.user.facts.splice(req.params.id, 1);
  req.user.save(function(err) {
    res.redirect('/users');
  });

}
