var express = require('express');
var router = express.Router();
var scgController = require('../controllers/scgController');

router.get('/scg', scgController.getBangsueRestaurants);

module.exports = router;