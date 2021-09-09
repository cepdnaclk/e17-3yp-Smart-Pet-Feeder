const {validationResult} = require('express-validator/check');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/user');

const PetFeeder = require('../models/pet-feeder');

exports.signUp = (req,res,next) =>{
    const errors = validationResult(req);

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
            user.petFeeder = feederId;
            return user.save();
        })
        .then(result =>{
            res.status(201).json({message:'User Created!',userId:result._id})
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
            const token = jwt.sign({
                email:loadUser.email,
                userId:loadUser._id.toString()
            },
                'Smart-Pet-Feeder-2021',
                {expiresIn: '1h'}
            );

            res.status(201).json({
                idToken:token,
                expiresIn:"3600",
                userId: loadUser._id.toString()
            });
        })
        .catch(err=>{
            next(err);
        })
}

exports.getData = (req,res,next) =>{
    let feederId;
    User.findById(req.userId)
        .then(user=>{
            console.log(user)
            if (user){
                feederId = user.petFeeder;
                return PetFeeder.findById(feederId);
            }
        })
        .then(feeder=>{
            res.status(200).json({
                battery:feeder.battery,
                status:feeder.status,
                remainingRounds: feeder.remainingRounds
            })
        })
        .catch(err=>{console.log(err)})
}