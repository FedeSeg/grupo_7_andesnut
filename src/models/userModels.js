const fs = require('fs');
const path = require('path');

module.exports = {
    filename: path.resolve(__dirname, '../data/users.json'),

    readFile() {
        const userPath = this.filename;
        const userJson = fs.readFileSync(userPath, 'utf-8');
        return JSON.parse(userJson);
    },

    writeFile(newData) {
        const dataJson = JSON.stringify(newData, null, 2);
        fs.writeFileSync(this.filename, dataJson);
    }
}