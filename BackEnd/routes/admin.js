const express = require('express');

const { body } = require("express-validator/check");

const adminControllers = require("../controllers/authAdmin");

const isAuthAdmin = require("../middleware/is-auth-admin");

const router = express.Router();

//================================================== POST ==============================================================

router.post('/login',adminControllers.login);

router.post('/post_ActiveStatus',isAuthAdmin,adminControllers.postActiveStatus);

router.get('/get_feedbacks',isAuthAdmin,adminControllers.getFeedbacks);

router.get('/get_users',isAuthAdmin,adminControllers.getUsers);

router.get('/get_usersDetails',isAuthAdmin,adminControllers.getUsersDetails);

module.exports = router;