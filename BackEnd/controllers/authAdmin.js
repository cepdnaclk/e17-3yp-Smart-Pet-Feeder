const {validationResult} = require('express-validator/check');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');

const Feedback = require('../models/feedback');

exports.login = (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;
    let loadAdmin;

    Admin.findOne({email:email})
        .then(user =>{
            if(!user){
                const error = new Error('Admin not found!');
                error.statusCode = 404;
                throw error;
            }
            loadAdmin = user;
            return bcrypt.compare(password,user.password);
        })
        .then(isEqual =>{
            if (!isEqual){
                const error = new Error('Incorrect Password!');
                error.statusCode = 401;
                throw error;
            }
            const token = jwt.sign({
                    email:loadAdmin.email,
                    userId:loadAdmin._id.toString()
                },
                'Smart-Pet-Feeder-2021',
                {expiresIn: '1h'}
            );

            res.status(201).json({
                idToken:token,
                expiresIn:"3600",
                userId: loadAdmin._id.toString()
            });
        })
        .catch(err=>{
            next(err);
        })
}


exports.getFeedbacks = (req,res,next) =>{
    Feedback.find({isHandle:false})
        .then(result =>{
            res.status(200).json(result);
        })
        .catch(err =>
        next(err)
        )
}