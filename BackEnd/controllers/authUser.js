const {validationResult} = require('express-validator/check');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/user');

const PetFeeder = require('../models/pet-feeder');

const ActiveSchedule = require('../models/active-schedules');

const Notification = require('../models/notification');

const Feedback = require('../models/feedback');

const mongoose = require('mongoose');

const Speakeasy = require('speakeasy');

// auth/user/[GET Methods]

//get the current status of the pet feeder (battery, status, remaining rounds)
exports.getStatus = (req,res,next) =>{
    let feederId;
    User.findById(req.userId)
        .then(user=>{

            if (!user){
                const error = new Error("Something went wrong!")
                error.statusCode = 500
                throw error
            }
            feederId = user.petFeeder;
            return PetFeeder.findById(feederId);
        })
        .then(feeder=>{
            res.status(200).json({
                battery:feeder.battery,
                status:feeder.status,
                remainingRounds: feeder.remainingRounds
            })
        })
        .catch(err=>{
            console.log(err);
            next(err);
        })
}

//Get active schedule(Get method)
exports.getActiveSchedules = (req,res,next) =>{

    User.findById(req.userId)
        .then(user =>{
            if (!user){
                const error = new Error("Something went wrong!")
                error.statusCode = 500
                throw error
            }

            res.status(200).json(user.ActiveSchedules);

        })
        .catch(err => next(err));
}


exports.getScheduleHistory =(req,res,next) =>{
    User.findById(req.userId)
        .populate('ScheduleHistory')
        .then(user =>{
            if (!user.ScheduleHistory){
                const error = new Error("Something went wrong");
                error.statusCode = 500;
                throw error;
            }
            res.status(201).json(user.ScheduleHistory);
        })
        .catch(err =>{
            next(err);
        })

}

exports.getNotifications = (req,res,next) =>{
    User.findById(req.userId)
        .populate('notifications')
        .then(user =>{
            if (user){
                res.status(201).json(user.notifications);
            }
        })
        .catch(err =>{
            next(err);
        })
}




// /auth/user [POST methods]/
exports.signUp = (req,res,next) =>{

    const errors = validationResult(req);
    let loadUser;
    if (!errors.isEmpty()){
        const message = errors.array()[0].msg;
        console.log(errors);
        const error = new Error(message);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phoneNumber = req.body.phoneNumber;
    let feederId;
    bcrypt.hash(password,12)
        .then(hashedPw =>{
            const user = new User({
                email:email,
                password:hashedPw,
                name: name,
                mobileNumber: phoneNumber
            });
            return user.save();
        })
        .then(result =>{

            const petFeeder = new PetFeeder({
                status: true,
                owner: result._id
            });
            return petFeeder.save();
        })
        .then(result=>{
            feederId = result._id;
            return User.findById(result.owner);
        })
        .then(user=>{
            loadUser = user;
            user.petFeeder = feederId;
            return user.save();
        })
        .then(result =>{
            const token = jwt.sign({
                    email:loadUser.email,
                    userId:loadUser._id.toString()
                },
                'Smart-Pet-Feeder-2021',
                {expiresIn: '1h'}
            );
            res.status(201).json({
                message:"User created",
                idToken:token,
                expiresIn:"3600",
                userId: loadUser._id.toString()
            })
        })
        .catch(err =>{
            if (!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        });

}


exports.login = (req,res,next) =>{
    const email = req.body.email;
    const password = req.body.password;
    let loadUser;
    let token;
    let refreshToken;

    User.findOne({email:email})
        .then(user =>{
            if(!user){
                const error = new Error('User not found!');
                error.statusCode = 404;
                throw error;
            }
            loadUser = user;
            return bcrypt.compare(password,user.password);
        })
        .then(isEqual =>{
            if (!isEqual){
                const error = new Error('Incorrect Password!');
                error.statusCode = 401;
                throw error;
            }
            token = jwt.sign({
                email:loadUser.email,
                userId:loadUser._id.toString()
            },
                'Smart-Pet-Feeder-2021',
                {expiresIn: '1y'}
            );



            refreshToken = jwt.sign({
                email:loadUser.email,
                userId:loadUser._id.toString()
            },
                'SmartPetFeeder2021',
                {expiresIn: '1y'}
            );

            loadUser.refreshTokens.push(refreshToken);
            return loadUser.save();

        })
        .then(result=>{
            res.status(201).json({
                idToken:token,
                refreshToken:refreshToken,
                expiresIn:"3600",
                userId: loadUser._id.toString()
            });
        })
        .catch(err=>{
            next(err);
        })
}

exports.postGetToken=( req,res,next) =>{
    const refreshToken = req.get('Authorization').split(' ')[1];
    if (! refreshToken ){
        const error = new Error("Error occurred");
        error.statusCode = 403;
        throw error;
    }
    let decodedToken;
    try{
        decodedToken = jwt.verify(refreshToken,'SmartPetFeeder2021');
    }
    catch (err){
        console.log("This is error")
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken){
        const error = new Error('You are not authenticated!');
        error.statusCode = 401;
        throw error;
    }
     User.findById(decodedToken.userId)
         .then(user =>{
             if (!user){
                 const error = new Error("User not authenticated error");
                 error.statusCode = 403;
                 throw error;
             }
             if (! user.refreshTokens.includes(refreshToken)){
                 const error = new Error("You are not authenticated");
                 error.statusCode = 403;
                 throw error;
             }
             const token = jwt.sign({
                     email:user.email,
                     userId:user._id.toString()
                 },
                 'Smart-Pet-Feeder-2021',
                 {expiresIn: '1y'}
             );

             res.status(201).json({
                 idToken:token,
                 refreshToken:refreshToken,
                 expiresIn:"3600",
                 userId: user._id.toString()
             });
         }).catch(err =>{next(err)})
}




exports.postSchedule = (req,res,next) =>{
    let errors = validationResult(req);
    if (!errors.isEmpty()){
        const message = errors.array()[0].msg;
        const error = new Error(message);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    let user;
    let scheduleId = req.body._id;
    console.log(new Date());
    if (!scheduleId){
        scheduleId = new mongoose.Types.ObjectId();
        console.log(scheduleId);
    }
    const schedule = new ActiveSchedule({
        _id : scheduleId,
        title : req.body.title,
        date_time : req.body.date_time,
        status : req.body.status
    })

    User.findById(req.userId)
        .then(owner =>{
            user = owner;
            const index = owner.ActiveSchedules.findIndex((schedules) =>{
                console.log(schedules._id.toString() === scheduleId);
                return schedules._id.toString() === scheduleId;


            });

            if (owner.ActiveSchedules.length < 4){
                if (index <4 && index >=0){
                    owner.ActiveSchedules[index] = schedule;
                }
                else {
                    owner.ActiveSchedules.push(schedule);
                }
                return owner.save();
            }
            else if(owner.ActiveSchedules.length === 4 ){
                if (index <4 && index >=0){
                    owner.ActiveSchedules[index] = schedule;
                    return owner.save();
                }
                else {
                    const error = new Error('Cannot perform this action');
                    error.statusCode = 500;
                    throw error;
                }
            }
        })
        .then(result =>{

            res.status(201).json({message:'Scheduled Created!',scheduleId:scheduleId});
        })
        .catch(err =>{
            console.log(err);
            next(err);
        })
}


exports.postDeleteSchedule = (req,res,next) =>{
    let scheduleId = req.body._id;

    User.findById(req.userId)
        .then(user =>{
            if (user.ActiveSchedules.length > 0){
                const index = user.ActiveSchedules.findIndex((schedule) =>{
                    return schedule._id.toString() === scheduleId;
                });

                if (index < 4 && index >=0){
                    user.ActiveSchedules.splice(index, 1);
                }
                return user.save();
            }
        })
        .then(result =>{
            res.status(200).json({message:"Schedule deactivated"});
        })
        .catch(err =>{
            next(err);
        })
}


exports.postFeedback = (req,res,next) =>{
    let feedback_id;
    const feedback = new Feedback({
        title:req.body.title,
        message:req.body.message,
        date_time:req.body.date_time,
        userId:req.userId,
        isHandle:false
    });

    feedback.save()
        .then(result =>{
            feedback_id = result._id;
            return User.findById(req.userId);
        })
        .then(user => {
            user.feedback.push(feedback_id);
            return user.save();
        })
        .then(result =>{
            res.status(201).json({message:"Feedback submitted"});
        })
        .catch(err =>{
            next(err);
        })
}

exports.postMarkedAsRead = (req,res,next)=>{
    let notificationId = req.body._id;
    if (!notificationId){
        const error = new Error("Error Occurred");
        error.statusCode = 422;
        throw error;
    }
    User.findById(req.userId)
        .populate('notifications')
        .then(user =>{
            const index = user.notifications.findIndex(notification => {

                return notification._id.toString() === notificationId;
            });
            if (index < 0){
                const error = new Error("Error! notification not found");
                error.statusCode = 422;
                throw error;
            }

            user.notifications[index].isRead =true;
            return user.notifications[index].save();
        })
        .then(result =>{
            res.status(201).json({_id:result._id,message:"Successful"})
        })
        .catch(err =>{
            console.log(err);
        })
    ;
}
