const express = require('express');
const router = express.Router();
const feedingsCtrl = require('../controllers/feedings');
const usersCtrl = require('../controllers/users');



//router.post('/setups/:id/notes/new',notesCtrl.create)

//router.get('/:id', notesCtrl.show);
router.get('/feedings', feedingsCtrl.index);

router.get('/feedings/new', feedingsCtrl.new);

router.get('/feedings/show', feedingsCtrl.show);

router.get('/users', usersCtrl.index);


module.exports = router;