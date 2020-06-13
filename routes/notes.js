const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const usersCtrl = require('../controllers/users');



//router.post('/setups/:id/notes/new',notesCtrl.create)

//router.get('/:id', notesCtrl.show);
router.get('/notes', notesCtrl.index);

router.get('/notes/new', notesCtrl.new);

router.get('/notes/show', notesCtrl.show);

router.get('/users', usersCtrl.index);


module.exports = router;