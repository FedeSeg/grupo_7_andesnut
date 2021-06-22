const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/products.json'),

    readFile() {
        const productPath = this.filename;
        const productsJson = fs.readFileSync(productPath, 'utf-8');
        return JSON.parse(productsJson);
    },

    writeFile(newData) {
        const dataJson = JSON.stringify(newData, null, 2);
        fs.writeFileSync(this.filename, dataJson);
    },

    generateId(){
        const products = this.readFile();
        const lastProduct = products.pop();
        return lastProduct.id + 1
    },

    findAll() {
        const products = this.readFile();
        return products
    },

    findByPk(id) {
        const products = this.readFile();
        const productFound = products.find(product => product.id == id);
        return productFound;
    },

    create(product) {
        product.id = this.generateId();
        const products = this.readFile();
        const productsUpdated = [...products, product];
        this.writeFile(productsUpdated);
        return product;
    },
    update(data, id) {
        const products = this.readFile();

        const newProducts = products.map(product => {
            if(product.id == id){
                product = {
                    id: product.id,
                    ...data
                }
            }
            return product;
        });

        this.writeFile(newProducts);
    },
    destroy(id) {
        const products = this.readFile();

        const newProducts = products.filter(product => product.id != id);

        this.writeFile(newProducts);
    }
}