const productController = {
    producto: (req,res) => {
        res.sendFile(path.resolve(__dirname, '../views/productDetail.html'));
    }
}