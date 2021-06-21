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
        //res.send(req.body)
        const { name, price250, price500, price1, beneficios } = req.body;
        const { file } = req
        const image = file.filename
        const product = {
            name: name,
            price250: price250,
            price500: price500,
            price1: price1,
            beneficios: beneficios,
            image: '/images/' + image
        }
        const productCreated = productModel.create(product)

    res.redirect('/products/detail/' + productCreated.id);
    }
}

module.exports = productController