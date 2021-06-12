const productModel = require('../models/productModel')

const productController = {
    
    producto: (req,res) => {
        res.render('products/productDetail') 
    },
    new: (req, res) => {
        res.render('products/productNew')
    },
    store: (req, res) => {
        const { name, price250, price500, price1, beneficios } = req.body
        const product = {
            name: name,
            price250: price250,
            price500: price500,
            price1: price1,
            beneficios: beneficios,
        }
        const productCreated = productModel.create(product)

    }
}

module.exports = productController