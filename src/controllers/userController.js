const userController = {
    
    register: (req,res) => {
        res.render('users/register')
    },

    login: (req,res) => {
        res.render('users/login')
    },

    newUser: (req,res) => {
        
    }
}

module.exports = userController