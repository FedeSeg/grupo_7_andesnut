const productModel = require('../models/productModel')

const homeController = {
    
    home: (req,res) => {
        const productList = productModel.findAll()

        res.render('home/index', { productList })
    }
}

module.exports = homeController