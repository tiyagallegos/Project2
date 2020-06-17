const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const passport = require('passport');
const usersCtrl = require('../controllers/users');
const reviewsCtrl = require('../controllers/reviews');



router.post('/', reviewsCtrl.create);
router.delete('/:id', reviewsCtrl.delete);
router.delete('/:id', reviewsCtrl.edit);
router.put('/:id', reviewsCtrl.update);