const express = require('express');
const router = express.Router();
const setupsCtrl = require('../controllers/setups');
const usersCtrl = require('../controllers/users');

// GET to add new setup page 
router.post('/users/:UserId/setups', setupsCtrl.newSetup);
//router.get('/users/:UserId/feeding', setupsCtrl.feeding);
//route to confimration page displaying all session data
//router.get('/setups/show', setupsCtrl.feeding);
//router.get('/setups/index', setupsCtrl.index);
//this route will respond to posted setup sending back to index to complete rest of form or actually
//*** cahnge this to route to send to feedingsession index form when completed???


//get to index
router.get(`/users/:id/setups`, setupsCtrl.index);
router.get(`/users/:id/setups/new`, setupsCtrl.newPage);
//router.post('/feedings/new', setupsCtrl.newSetup);

router.post('/users/:id/setups', setupsCtrl.newSetup);

router.get(`/setups/:id/feedings/new`, setupsCtrl.feedingPage);

router.get(`/users/:id/setups/show`, setupsCtrl.showPage);
router.get('/users', usersCtrl.index);

module.exports = router;