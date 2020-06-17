//const Index = require('../model/setup')
const User = require('../models/user');

module.exports = {
    index,
    create
};

function index(req, res) {
    res.render('index', {user: req.user});
}


function create(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.reviews.push(req.body); //only in server memory not on DB
        user.save(function(err) {
        res.redirect(`/${req.body._id}`);    
        });
    });

}