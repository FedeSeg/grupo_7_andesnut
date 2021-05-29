const productController = {
    producto: (req,res) => {
        res.render('productDetail')
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
    }
}

module.exports = productController