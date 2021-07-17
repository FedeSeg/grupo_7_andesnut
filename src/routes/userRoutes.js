const express = require('express');
const router = express.Router();
const path = require('path');
const userController = require('../controllers/userController');
//const logDBMiddleware = require('../middlewares/logDBMiddleware')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       let folder = path.join(__dirname, '../../public/images/users');
       cb(null, folder);
    },
    filename: (req, file, cb) => {
        const newFileName = 'Avatar' + Date.now() + path.extname(file.originalname); 
        cb (null, newFileName);
    }
});

const upload = multer({storage});

router.get('/register', userController.register);
router.post('/register', /*logDBMiddleware,*/ userController.store)
router.put('/register', upload.single('avatarFile'), userController.update);

router.get('/login', userController.login);

module.exports = router