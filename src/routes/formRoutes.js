const express = require('express');
const router = express.Router();
const path = require('path');

const formController = require('../controllers/formController');

router.get('/register', formController.register);

router.get('/login', formController.login);

module.exports = router