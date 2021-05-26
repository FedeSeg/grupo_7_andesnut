const express = require('express');
const router = express.Router();

router.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

module.exports = router