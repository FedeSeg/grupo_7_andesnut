const formController = {
    register: (req,res) => {
        res.render('register')
        //res.sendFile(path.resolve(__dirname, '../views/register.html'));
    },
    login: (req,res) => {
        res.render('login')
        //res.sendFile(path.resolve(__dirname, '../views/login.html'));
    }
}

module.exports = formController