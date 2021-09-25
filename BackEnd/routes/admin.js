const express = require('express');

const { body } = require("express-validator/check");

const adminControllers = require("../controllers/authAdmin");

const isAuth = require("../middleware/is-auth");

const router = express.Router();

//================================================== POST ==============================================================

router.post('/login',adminControllers.login);

router.post('/post_ActiveStatus',adminControllers.postActiveStatus);

router.get('/get_feedbacks',adminControllers.getFeedbacks);

router.get('/get_users',adminControllers.getUsers);

module.exports = router;