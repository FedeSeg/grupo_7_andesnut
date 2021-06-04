const express = require('express');
const router = express.Router();
const path = require('path');

const productController = require('../controllers/productController');

router.get('/productDetail/:idProducto', productController.producto);
//Deberia borrar el /productDetail de router.get porque ya esta especificado en app.js

module.exports = router


//req.params.idProducto ------> para tomar el numero de id
