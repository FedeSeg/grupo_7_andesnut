const productModel = require('../models/productModel')

const productController = {
    
    list: (req, res) => {
        const productList = productModel.findAll()

        res.render('products/productList', { productList })
    },
    detail: (req,res) => {
        const {id} = req.params;
        const productDetail = productModel.findByPk(id);
        res.render('products/productDetail', { productDetail }); 
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