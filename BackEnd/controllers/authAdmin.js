const {validationResult} = require('express-validator/check');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');

const Feedback = require('../models/feedback');

const User = require('../models/user');

const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

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
                'Smart-Pet-Feeder-2021-Admin',
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

exports.postActiveStatus = (req,res,next) =>{
    const userId = new ObjectId(req.body.userId);
    const isActive = req.body.isActive;

    User.findById({_id:userId})
        .then(user =>{
            if (!user){
                const error = new Error("User Not Found!");
                error.statusCode = 404;
                throw error;
            }
            user.isActive = isActive;
            return user.save();
        })
        .then(result =>{
            res.status(200).json({message:"Successful",userId:userId});
        })
        .catch(err => {
            next(err);
        })
}


exports.postReply = (req,res,next)=>{
    const feedbackId = req.body.feedbackId;
    const message = req.body.message;

    Feedback.findById(feedbackId)
        .then(feedback =>{
            feedback.reply = message;
            feedback.isHandle = true;
            return feedback.save();
        })
        .then(result =>{
            res.status(201).json({message:"Message sent"});
        })
        .catch(err=>next(err))
}

exports.getFeedbacks = (req,res,next) =>{
    Feedback.find({isHandle:false})
        .populate('userId')
        .then(result =>{
            const feedbacks = result.map(feedback =>{
                return {
                    userId:feedback.userId._id,
                    email:feedback.userId.email ,
                    title:feedback.title,
                    message:feedback.message,
                    date_time:feedback.date_time
                }
            })
            res.status(200).json(feedbacks);
        })
        .catch(err =>
        next(err)
        )
}



exports.getUsers = (req,res,next) =>{
    User.find({})
        .then(users =>{
            const editedUsers = users.map(user =>{
                return {userId: user._id,
                    name:user.name,
                    email:user.email,
                    isActive:user.isActive};
            })
            res.status(200).json(editedUsers);
        })
        .catch(err => next(err))
}

exports.getUsersDetails = (req,res,next) =>{
    User.find({})
        .then(users =>{
            const userCount = users.length;
            let activeUsers  = 0;
            users.forEach(user =>{
                if (user.isActive){
                    activeUsers++;
                }
            })

            res.status(200).json({userCount:userCount,activeUsers:activeUsers});
        })
        .catch(err=>{
            next(err)
        })
}