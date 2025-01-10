const express = require('express');

const router = express.Router();

const { createUser, userSignIn } = require('../controllers/user');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user');
const { isAuth } = require('../middleware/auth');

const User = require('../models/user');

const multer = require('multer');
const sharp = require('sharp');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) =>{
    if(file.mimetype.startsWith('image')){
        cb(null, true);
    }else{
        cb('invalid image file', false);
    }
}

const uploads = multer({storage,fileFilter})

router.post('/create-user',validateUserSignUp,userValidation,createUser)
router.post('/sign-in', validateUserSignIn, userValidation, userSignIn)
router.post('/upload-profile', isAuth,uploads.single('profile'), async (req,res) => {
    const {user } = req
    if (!user) return res.status(401).json({success: false, message: 'Unauthorized access !'});

    try {
        const profilBuffer = req.file.buffer
        const {width, height} = await sharp(profilBuffer).metadata();
        const avatar = await sharp(profilBuffer).resize(Math.round(width * 0.5), Math.round(height * 0.5)).toBuffer()
    
        await User.findByIdAndUpdate(user._id, {avatar});
        res.status(200).json({success: true, message:'Your profile has updated !'})
        
    } catch (error) {
        res.status(500).json({success: false, message:'server error, try after some time'})
        console.log('Error while updating profile image', error.message);
    }
    
   
    
});

module.exports = router;