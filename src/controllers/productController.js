const productModel = require('../models/productModel')

const productController = {
    
    producto: (req,res) => {
        res.render('products/productDetail')
    }
}

module.exports = productController