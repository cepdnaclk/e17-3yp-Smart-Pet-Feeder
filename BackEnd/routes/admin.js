const express = require('express');

const { body } = require("express-validator/check");

const adminControllers = require("../controllers/authAdmin");

const isAuthAdmin = require("../middleware/is-auth-admin");

const isAuth2faAdmin = require('../middleware/is-auth-2fa-admin');

const router = express.Router();

//================================================== POST ==============================================================

router.post('/login',
    [
        body('email').not().isEmail().withMessage("Enter a valid email")
            .normalizeEmail({gmail_remove_dots:false}),
        body('password').trim().not().isEmpty().withMessage("Password cannot be empty")
    ],adminControllers.login);

router.post('/verifyLogin',isAuth2faAdmin,adminControllers.postVerifyLogin);

router.post('/post_ActiveStatus',isAuthAdmin,adminControllers.postActiveStatus);

router.post('/post_reply',isAuthAdmin,adminControllers.postReply);

router.get('/get_feedbacks',isAuthAdmin,adminControllers.getFeedbacks);

router.get('/get_users',isAuthAdmin,adminControllers.getUsers);

router.get('/get_usersDetails',isAuthAdmin,adminControllers.getUsersDetails);

module.exports = router;