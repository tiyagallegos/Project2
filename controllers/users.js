const User = require('../models/user');

module.exports = {
  userIndex,
  
};

function userIndex(req, res, next) {
    User.find({}, function(err, users) {
     res.render('setups/index', {
      users,
      user: req.user
      });
   });
  }