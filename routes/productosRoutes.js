const express = require('express');
const router = express.Router();

//Deberia borrar el /productDetail de router.get porque ya esta especificado en app.js

router.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

module.exports = router