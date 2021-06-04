const express = require('express');
const router = express.Router();
const path = require('path');

const cartController = require('../controllers/registerController');

router.get('/register', registerControler.register);
router.post('/register', registerControler.register);

module.exports = router