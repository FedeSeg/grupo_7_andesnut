const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

module.exports = router