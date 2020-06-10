const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');



//router.post('/setups/:id/notes/new',notesCtrl.create)

router.get('/:id', notesCtrl.show);
router.get('/', notesCtrl.index);


module.exports = router;