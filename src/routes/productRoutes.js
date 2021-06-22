const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       let folder = path.join(__dirname, '../../public/images');
       cb(null, folder);
    },
    filename: (req, file, cb) => {
        const newFileName = 'product' + Date.now() + path.extname(file.originalname); //cambiaria el nombre de la imagen al name del req.params
        cb (null, newFileName);
    }
});

const upload = multer({storage});
const productController = require('../controllers/productController');
const { filename } = require('../models/productModel');
//const userController = require('../controllers/userController');

router.get('/detail/:id', productController.detail);

router.get('/new', productController.new);

router.post('/new', upload.single('productImage'), productController.store);


router.get('/detail/:id/edit', productController.edit);
router.put('/detail/:id/edit', upload.single('productImage'), productController.update);

router.delete('/detail/:id', productController.destroy)


module.exports = router;