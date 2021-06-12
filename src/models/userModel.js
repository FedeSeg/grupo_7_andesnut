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
    },

    generateId(){
        const users = this.readFile();
        const lastUser = users.pop();
        return lastUser.userId + 1
    },

    findAll() {
        const users = this.readFile();
        return users
    },

    findByPk(userId) {
        const users = this.readFile();
        const userFound = users.find(user => user.userId == userId);
        return userFound;
    },

    create(user) {
        user.userId = this.generateId();
        const users = this.readFile();
        const usersUpdated = [...users, user];
        this.writeFile(usersUpdated);
        return user;
    }
}