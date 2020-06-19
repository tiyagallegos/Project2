const express = require('express');
const router = express.Router();
const feedingsCtrl = require('../controllers/feedings');
const usersCtrl = require('../controllers/users');


//route to new feeding form
router.get('/feedings/new', feedingsCtrl.indexForm);


//route to all feedings per id
router.get('/feedings', feedingsCtrl.index);
//router.post('/feedings', feedingsCtrl.create)

//route to show a feeding 
router.get('/feedings/show', feedingsCtrl.show);

//route to get to home page for users
router.get('/users', usersCtrl.index);


module.exports = router;