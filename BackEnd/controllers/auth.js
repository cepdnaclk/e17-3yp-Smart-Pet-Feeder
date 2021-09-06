const {validationResult} = require('express-validator/check');

const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.signUp = (req,res,next) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        const message = errors.array()[0].msg;
        console.log(message);
        const error = new Error(message);
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    bcrypt.hash(password,12)
        .then(hashedPw =>{
            const user = new User({
                email:email,
                password:hashedPw,
                name: name
            });
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