const cartController = {
    cart: (req,res) => {
        res.render('productCart')
        //res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    }
}

module.exports = cartController

