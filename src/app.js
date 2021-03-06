const express = require('express');
const path = require('path')
const productRoutes = require('./routes/productRoutes.js')
const homeRoutes = require('./routes/homeRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const cartRoutes = require('./routes/cartRoutes.js')
const methodOverride = require('method-override')
const logMiddleware = require('./middlewares/logMiddleware')
const session = require('express-session');
const bcrypt = require('bcryptjs')

const app = express()
const publicPath = path.resolve(__dirname, '../public')
const viewsPath = path.resolve(__dirname, './views') // ruta absoluta de la carpeta views

app.set('view engine', 'ejs');
app.set( 'views' , viewsPath )

app.use(session({secret: "andesnut"}))

//app.use(logMiddleware);

app.use ( express.static ( publicPath ) );
app.use ( express.urlencoded ( { extended: false} ) );
app.use ( methodOverride ('_method') );
app.use ( express.json());

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.use('/products', productRoutes) 
//app.use('/productDetail/:id', productRoutes)
app.use('/home', homeRoutes)
app.use('/user', userRoutes)
app.use('/cart', cartRoutes)







