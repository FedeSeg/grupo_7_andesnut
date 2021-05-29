const homeController = {
    home: (req,res) => {
        res.sendFile(path.resolve(__dirname, '../views/index.html'));
    }
}

module.exports = homeController