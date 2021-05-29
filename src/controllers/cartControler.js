const cartController = {
    cart: (req,res) => {
        res.sendFile(path.resolve(__dirname, '../views/productCart.html'));
    }
}

module.exports = cartController