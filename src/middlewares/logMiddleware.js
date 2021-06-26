const fs = require('fs');

function logMiddleware (req,res,next) {
    //false.appendFileSync('log.txt', 'se ingreso en la pagina ' + req.url);
    fs.appendFileSync('log.txt', 'se ingreso en la pagina ' + req.url)
    next();
};

module.exports = logMiddleware;
