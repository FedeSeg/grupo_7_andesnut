const express = require('express');
const path = require('path')
const productRoutes = require('./routes/productRoutes.js.js.js')
const homeRoutes = require('./routes/homeRoutes.js')
const formRoutes = require('./routes/formRoutes.js')

const app = express()
const publicPath = path.resolve(__dirname, './public')

app.use( express.static(publicPath) )

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use('/productDetail', productRoutes)
app.use('/home', homeRoutes)
app.use('/form', formRoutes)
app.use('/productCart', cartRoutes)

// ACA NO DEBERIAN QUEDAR app.get, SOLO app.use! TENGO QUE AGREGAR RUTAS MAIN, RUTAS FORMS Y PRODUCT CART




