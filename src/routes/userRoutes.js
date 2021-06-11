const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');

router.get('/user/register', userController.register);

router.get('/user/login', userController.login);

module.exports = router