const express = require('express');
const router = express.Router();
const path = require('path');

//Deberia borrar el /productDetail de router.get porque ya esta especificado en app.js
router.get('/productDetail/:idProducto', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));


});

module.exports = router

/* 
router.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

req.params.idProducto ------> para tomar el numero de id

*/