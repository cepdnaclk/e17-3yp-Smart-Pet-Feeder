const express = require('express');

const {body} = require('express-validator/check')

const authControllers = require('../controllers/auth');

const User = require('../models/user');

const router = express.Router();

router.put('/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Please enter a valid email!')
            .custom((value,{req}) =>{
                   return  User.findOne({email:value})
                        .then(userDoc =>{
                                if (userDoc){
                                        return Promise.reject('E-mail already in use')
                                }
                        })
            })
            .normalizeEmail(),
        body('password').trim()
            .isLength({min: 6}).withMessage('Password is too short'),
        body('name').trim().not().isEmpty().withMessage('name field cannot be empty'),
        body('confirmPassword').trim()
            .custom((value,{req})=>{
                if (value !== req.body.password){
                    throw new Error('Passwords has to match');
                }
                return true;
            })

],authControllers.signUp);

module.exports = router;