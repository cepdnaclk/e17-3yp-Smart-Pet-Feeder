const express = require('express');

const { body } = require("express-validator/check");

const adminControllers = require("../controllers/authAdmin");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

//================================================== POST ==============================================================

router.post('/login',adminControllers.login);

router.post('/post_ActiveStatus',isAuth,adminControllers.postActiveStatus);

router.get('/get_feedbacks',isAuth,adminControllers.getFeedbacks);

router.get('/get_users',isAuth,adminControllers.getUsers);

router.get('/get_usersDetails',isAuth,adminControllers.getUsersDetails);

module.exports = router;