const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
});

module.exports = router