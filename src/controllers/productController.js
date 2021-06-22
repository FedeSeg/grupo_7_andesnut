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
    },
    edit: (req, res) => {
        const product = productModel.findByPk(req.params.id);

        res.render('products/productEdit', { product });
    },
    update: (req, res) => {
        const data = req.body;
        const { id } = req.params;

        productModel.update(data, id);

        res.redirect('/products/detail/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        productModel.destroy(id);

        res.redirect('/products/productList');
    }
}

module.exports = productController