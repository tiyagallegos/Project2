const express = require('express');
const router = express.Router();
const setupsCtrl = require('../controllers/setups');

// GET to add new setup page 
router.get('/new', setupsCtrl.new);

//this route will respond to posted setup sending back to index to complete rest of form or actually
//*** cahnge this to route to send to feedingsession index form when completed???
router.post('/', setupsCtrl.create);

//get to index
router.get('/', setupsCtrl.index);

module.exports = router;