module.exports = {
    new: newSetup,
    create,
    index,
    show
};

function newSetup(req, res) {
 res.render('setups/new');
}

function create(req, res) {
    req.body.foodPrep = !!req.body.foodPrep;
}

function index(req, res) {
    res.render('setups/index');
}

    function show(req, res) {
        res.render('setups/show');
       }
//const setup = new setup(req.body);
//setup.save(function(err) {
//    if (err) return res.render('setups/new');
//    console.log(setup);
//    res.redirect('/setups/new');
//})