const express = require('express');
const path = require('path')
const productRoutes = require('./routes/productRoutes.js')
const homeRoutes = require('./routes/homeRoutes.js')
const formRoutes = require('./routes/formRoutes.js')
const cartRoutes = require('./routes/cartRoutes.js')

const app = express()
const publicPath = path.resolve(__dirname, '../public')

app.set('view engine', 'ejs');

app.set( 'views' , './views' )

app.use( express.static(publicPath) )

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use('/productDetail', productRoutes)
app.use('/home', homeRoutes)
app.use('/form', formRoutes)
app.use('/productCart', cartRoutes)






