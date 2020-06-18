const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const passport = require('passport');
const usersCtrl = require('../controllers/users');
const reviewsCtrl = require('../controllers/reviews');



router.post('/', reviewsCtrl.create);
router.delete('/', reviewsCtrl.delete);
router.edit('/', reviewsCtrl.edit);
router.put('/', reviewsCtrl.update);