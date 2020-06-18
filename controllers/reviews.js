
//find the movie
//pust the review into movies' reviews array
//save the movie object

const user = require("../models/user");

//redirect user somewhere else, or to same page
module.exports = {
    create,
    delete: delReview,
    edit,
    update: updateReview
  };
function create(req, res) {
    req.user.reviews.push(req.body);
    req.user.save(function(err) {
      res.redirect('/');
    });
  }
  req.user.patientInfo.push(req.body);
  req.user.save(function(err){
      console.log(err)
      res.redirect(`users/${req.user._id}`);
 });
}
  function delReview(req, res) {
    req.user.reviews.pull(req.params.id);
    req.user.save(function(err) {
      res.redirect('/');
    });
  
  }
  
  function edit(req, res) {
    res.render('/', {
    reviews: req.user.reviews.getOne(req.params.id),
        reviews: parseInt(req.params.id) + 1
})};
    
function updateReview(req, res) {
    req.user.reviews(req.params.id, req.body.reviews);
    console.log(req.body.reviews)
    res.render("/", {
        reviews: req.user.reviews.getOne(req.params.id),
        reviews: parseInt(req.params.id) + 1
    }
    );
}
