const express = require('express');
const router = express.Router();
const setupsCtrl = require('../controllers/setups');
const usersCtrl = require('../controllers/users');

// GET to add new setup page 
router.post('/setups/new', setupsCtrl.new);

//route to confimration page displaying all session data
router.get('/setups/show', setupsCtrl.show);

//this route will respond to posted setup sending back to index to complete rest of form or actually
//*** cahnge this to route to send to feedingsession index form when completed???
router.post('/', setupsCtrl.create);

//get to index
router.get('/setups', setupsCtrl.index);

router.get('/users', usersCtrl.index);

module.exports = router;