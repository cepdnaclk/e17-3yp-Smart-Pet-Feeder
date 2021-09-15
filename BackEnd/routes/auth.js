const express = require('express');

const {body} = require('express-validator/check')

const authControllers = require('../controllers/auth');

const User = require('../models/user');

const isAuth = require('../middleware/is-auth');

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
        body('name').trim()
            .not().isEmpty().withMessage('name field cannot be empty'),
        body('confirmPassword').trim()
            .custom((value,{req})=>{
                if (value !== req.body.password){
                    throw new Error('Passwords has to match');
                }
                return true;
            }),
        body('phoneNumber')
            .custom((value,{req}) =>{
                const mobile_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                if(!value.match(mobile_regex)){
                    throw new Error('Incorrect phone number!')
                }
                return true;
            })

],authControllers.signUp);

router.post('/login',authControllers.login);

router.get('/user/get_status',isAuth,authControllers.getStatus);

router.post('/user/post_schedules' , isAuth, authControllers.postSchedule);

module.exports = router;