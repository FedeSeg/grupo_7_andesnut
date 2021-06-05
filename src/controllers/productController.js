const productModel = require('../models/productModel')

const productController = {
    
    producto: (req,res) => {
        res.render('productDetail')
    }
}

module.exports = productController