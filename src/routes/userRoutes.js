const express = require('express');
const router = express.Router();
const path = require('path');
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');

router.get('/register', registerController.register);

router.get('/login', loginController.login);

module.exports = router