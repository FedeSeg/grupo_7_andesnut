const express = require('express');
const router = express.Router();
const path = require('path');

const cartController = require('../controllers/cartController');

router.get('/', cartController.cart);

module.exports = router