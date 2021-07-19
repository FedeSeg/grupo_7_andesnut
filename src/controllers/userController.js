const fs = require('fs');
//const bcrypt = require('bcryptjs')
const userController = {
    
    register: (req,res) => {
        //let password = req.body.password
        //let resultado = bcrypt.hashSync(password, 10);
        // TENGO QUE ARMAR TODO EL REGISTRO
        res.render('users/register')
    },
    /*
    processLogin: function(req, res){
        let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if (archivoUsuario == ""){
            usuarios = [];
        } else{
            usuarios = JSON.parse(archivoUsuario);
          }
        for (let i = 0; i < usuarios.lengh; i++){
            if (usuarios[i].userEmail == req.body.userEmail && bcrypt.compareSync(req.body.password, usuarios[i].password ) )
        }
    },
    */
    login: (req,res) => {
        //TENGO QUE VER QUE HAGO CON ESTE
        //RECORDATORIO FIJARME PROYECTO PLANETS SI TENGO TODO BIEN Y QUE ES LO QUE ME FALTA
        res.render('users/login')
    },

    store: (req, res) => {
        const { userName, userLastName, userPhone, userAddress, userAddressNum, userEmail } = req.body
        const user = {
            userName: userName,
            userLastName: userLastName,
            userPhone: userPhone,
            userAddress: userAddress,
            userAddressNum: userAddressNum,
            userEmail: userEmail
        }
        console.log(user)
        const userCreated = userModel.create(user)

    }
}

module.exports = userController