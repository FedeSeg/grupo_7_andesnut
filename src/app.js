const express = require('express');
const path = require('path')
const productRoutes = require('./routes/productRoutes.js')
const homeRoutes = require('./routes/homeRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const cartRoutes = require('./routes/cartRoutes.js')
const logMiddleware = require('./middleware/logMiddleware')

const app = express()
const publicPath = path.resolve(__dirname, '../public')

app.set('view engine', 'ejs');

app.set( 'views' , './views' )

app.use(logMiddleware);

app.use( express.static(publicPath) )

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use('/products', productRoutes) 
//app.use('/productDetail/:id', productRoutes)
app.use('/home', homeRoutes)
app.use('/user', userRoutes)
app.use('/cart', cartRoutes)







