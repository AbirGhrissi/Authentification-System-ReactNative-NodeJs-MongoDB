const express = require('express');

const router = express.Router();

const { createUser, userSignIn } = require('../controllers/user');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user');
const { isAuth } = require('../middleware/auth');

const multer = require('multer');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) =>{
    if(file.mimetype.startswith('image')){
        cb(null, true);
    }else{
        cb('invalid image file', false);
    }
}

const uploads = multer({storage,fileFilter})

router.post('/create-user',validateUserSignUp,userValidation,createUser)
router.post('/sign-in', validateUserSignIn, userValidation, userSignIn)
router.post('/upload-profile', isAuth,uploads.single('profile'), (req,res) => {
    const {user } = req
    if (!user) return res.status(401).json({success: false, message: 'Unauthorized access !'})
    req.file

})

module.exports = router;