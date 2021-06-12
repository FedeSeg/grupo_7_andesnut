const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/products.json'),
    readFile() {
        // Leer nuestra informacion
        const productPath = this.filename;
        const planetsJson = fs.readFileSync(productPath, 'utf-8');
        // Parsear la informacion
        return JSON.parse(planetsJson);
    },
    writeFile(newData) {
        // Pasar la data a json
        const dataJson = JSON.stringify(newData, null, 2);
        // Escribir el archivo
        fs.writeFileSync(this.filename, dataJson);
    },
    generateId(){
        const products = this.readFile();
        const lastProduct = products.pop();
        return lastProduct.id + 1

    }
    ,
    create(product) {
        product.id = this.generateId();
        const products = this.readFile();
    }
}