const express = require('express');

const router = express.Router();

const { createUser, userSignIn } = require('../controllers/user');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middleware/validation/user');
const { isAuth } = require('../middleware/auth');

router.post('/create-user',validateUserSignUp,userValidation,createUser)
router.post('/sign-in', validateUserSignIn, userValidation, userSignIn)
router.post('/upload-profile', isAuth,(req,res) => {
    const {user } = req
    if (!user) return res.status(401).json({success: false, message: 'Unauthorized access !'})

})

module.exports = router;