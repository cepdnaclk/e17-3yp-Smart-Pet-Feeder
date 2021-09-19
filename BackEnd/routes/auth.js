const express = require("express");

const { body } = require("express-validator/check");

const authControllers = require("../controllers/auth");

const User = require("../models/user");

const isAuth = require("../middleware/is-auth");

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

router.post('/user/post_schedules' ,[
    body("title").not().isEmpty().withMessage("Title Cannot be empty!"),
    body("date_time").not().isEmpty().withMessage("Date and time undefined")
], isAuth, authControllers.postSchedule);

router.post('/user/delete_schedule',isAuth,authControllers.postDeleteSchedule);

router.post('/user/post_feedback',isAuth,authControllers.postFeedback);

router.get('/user/get_status',isAuth,authControllers.getStatus);

router.get('/user/get_schedules',isAuth,authControllers.getActiveSchedules);

router.get('/user/get_history',isAuth,authControllers.getScheduleHistory);

router.get('/user/get_notifications',isAuth,authControllers.getNotifications);


module.exports = router;

