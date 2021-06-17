const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
//const logDBMiddleware = require('../middleware/logDBMiddleware')

router.get('/register', userController.register);
router.post('/register', /*logDBMiddleware,*/ userController.store)

router.get('/login', userController.login);

module.exports = router