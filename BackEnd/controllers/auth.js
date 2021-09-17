const { validationResult } = require("express-validator/check");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/user");

const PetFeeder = require("../models/pet-feeder");

const ActiveSchedule = require("../models/active-schedules");

exports.signUp = (req, res, next) => {
  console.log(req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
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
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        email: email,
        password: hashedPw,
        name: name,
        mobileNumber: phoneNumber,
      });
      return user.save();
    })
    .then((result) => {
      const petFeeder = new PetFeeder({
        status: true,
        owner: result._id,
      });
      return petFeeder.save();
    })
    .then((result) => {
      feederId = result._id;
      return User.findById(result.owner);
    })
    .then((user) => {
      user.petFeeder = feederId;
      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "User Created!", userId: result._id });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadUser;

  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("User not found!");
        error.statusCode = 404;
        throw error;
      }
      loadUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Incorrect Password!");
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          email: loadUser.email,
          userId: loadUser._id.toString(),
        },
        "Smart-Pet-Feeder-2021",
        { expiresIn: "1h" }
      );

      res.status(201).json({
        idToken: token,
        expiresIn: "3600",
        userId: loadUser._id.toString(),
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getStatus = (req, res, next) => {
  let feederId;
  User.findById(req.userId)
    .then((user) => {
      if (!user) {
        const error = new Error("Something went wrong!");
        error.statusCode = 500;
        throw error;
      }
      feederId = user.petFeeder;
      return PetFeeder.findById(feederId);
    })
    .then((feeder) => {
      res.status(200).json({
        battery: feeder.battery,
        status: feeder.status,
        remainingRounds: feeder.remainingRounds,
      });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

exports.getActiveSchedules = (req,res,next) =>{
    let activeSchedules;
    User.findById(req.userId)
        .then(user =>{
            if (!user){
                const error = new Error("Something went wrong!")
                error.statusCode = 500
                throw error
            }

            res.status(200).json(user.ActiveSchedules);

        })
        .catch(err => next(err))
}


exports.postSchedule = (req,res,next) =>{
    let user;
    let index = req.body.position_id;
    const schedule = new ActiveSchedule({
        position_id : req.body.position_id,
        title : req.body.title,
        date : req.body.date,
        time : req.body.time,
        featured : req.body.featured,
        status : req.body.status
    })

    User.findById(req.userId)
        .then(owner =>{
            user = owner;
            if(owner.ActiveSchedules.length ===0 || owner.ActiveSchedules.length <= 4){
                owner.ActiveSchedules[index-1] = schedule;
            }
            else{
                const error = new Error("Something went wrong! cannot submit this schedule");
                error.statusCode = 422;
                throw error;
            }
            return user.save();
        })
        .then(result =>{

            res.status(201).json({message:'Scheduled Created!',scheduleId:result._id});
        })
        .catch(err =>{
            console.log(err);
            next(err);
        })
}

