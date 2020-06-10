const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');



//router.post('/setups/:id/notes/new',notesCtrl.create)

//router.get('/:id', notesCtrl.show);
router.get('/notes', notesCtrl.index);

router.get('/notes/new', notesCtrl.new);

router.get('/notes/show', notesCtrl.show);


module.exports = router;