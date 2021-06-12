const userController = {
    
    register: (req,res) => {
        res.render('users/register')
    },

    login: (req,res) => {
        res.render('users/login')
    },

    store: (req, res) => {
        const { userName, userLastName, userPhone, userAddress, userAddressNum, userEmail } = req.body
        const user = {
            userId: userId,
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