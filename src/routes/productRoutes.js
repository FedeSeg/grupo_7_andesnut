const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       let folder= cb(null, path.join(__dirname, '../../public/images'));
       cb(null, folder)
    },
    filename: (req, file, cb) => {
        const newFileName = 'product' + Date.now() + path.extname(file.originalname);
        cb (null, newFileName)
    }
})
const upload = multer({storage})

const productController = require('../controllers/productController');
const { filename } = require('../models/productModel');
const userController = require('../controllers/userController');

router.get('/', productController.producto);
//Deberia borrar el /productDetail de router.get porque ya esta especificado en app.js

router.get('/new', productController.new)
router.post('/new', productController.store)
// router.post('/new', upload.single('productImage'))
module.exports = router



//req.params.idProducto ------> para tomar el numero de id
