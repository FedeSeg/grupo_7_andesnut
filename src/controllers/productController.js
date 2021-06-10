const productModel = require('../models/productModel')

const productController = {
    
    producto: (req,res) => {
        res.render('products/productDetail')
    },
    new: (req, res) => {
        res.render('products/productNew')
    }
}

module.exports = productController