const productModel = require('../models/productModel')

const productController = {
    
    list: (req, res) => {
        const productList = productModel.findAll()

        res.render('home/index', { productList })
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
        
        const product = req.body
        product.image = '/images/' + req.file.filename //(QUIERO PROBAR CON ESTE CODIGO A VER SI FUNCIONA)
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
        const productOriginal = productModel.findByPk(id)
        const {file} = req
        
        let image = productOriginal.image;

        if (file) {
            image = '/images/' + file.filename
        }
        data.image = image

        productModel.update(data, id);

        res.redirect('/products/detail/' + id);
    },
    destroy: (req, res) => {
        const id = req.params.id;
        
        productModel.destroy(id);

        res.redirect('/home');
    }
    
}

module.exports = productController