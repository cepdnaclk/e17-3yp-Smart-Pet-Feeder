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

const nodemailer = require('nodemailer');

const ejs = require('ejs');

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


//====================================================== POST ==========================================================

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

            const secret = Speakeasy.generateSecret({length:20});
            loadUser.secret = secret.base32;
            // token = jwt.sign({
            //     email:loadUser.email,
            //     userId:loadUser._id.toString()
            // },
            //     'Smart-Pet-Feeder-2021',
            //     {expiresIn: '1y'}
            // );
            //
            //
            //
            // refreshToken = jwt.sign({
            //     email:loadUser.email,
            //     userId:loadUser._id.toString()
            // },
            //     'SmartPetFeeder2021',
            //     {expiresIn: '1y'}
            // );
            //
            // loadUser.refreshTokens.push(refreshToken);
            return loadUser.save();

        })
        .then(result=>{

            const otp = Speakeasy.totp({
                secret:result.secret,
                encoding:'base32',

            });


            let sendHtmlEmail ='<!DOCTYPE html>\n' +
                '<html lang="en">\n' +
                '\n' +
                '<head>\n' +
                '    <title></title>\n' +
                '    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n' +
                '    <meta name="viewport" content="width=device-width, initial-scale=1">\n' +
                '    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n' +
                '    <style type="text/css">\n' +
                '        @media screen {\n' +
                '            @font-face {\n' +
                '                font-family: \'Lato\';\n' +
                '                font-style: normal;\n' +
                '                font-weight: 400;\n' +
                '                src: local(\'Lato Regular\'), local(\'Lato-Regular\'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format(\'woff\');\n' +
                '            }\n' +
                '\n' +
                '            @font-face {\n' +
                '                font-family: \'Lato\';\n' +
                '                font-style: normal;\n' +
                '                font-weight: 700;\n' +
                '                src: local(\'Lato Bold\'), local(\'Lato-Bold\'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format(\'woff\');\n' +
                '            }\n' +
                '\n' +
                '            @font-face {\n' +
                '                font-family: \'Lato\';\n' +
                '                font-style: italic;\n' +
                '                font-weight: 400;\n' +
                '                src: local(\'Lato Italic\'), local(\'Lato-Italic\'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format(\'woff\');\n' +
                '            }\n' +
                '\n' +
                '            @font-face {\n' +
                '                font-family: \'Lato\';\n' +
                '                font-style: italic;\n' +
                '                font-weight: 700;\n' +
                '                src: local(\'Lato Bold Italic\'), local(\'Lato-BoldItalic\'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format(\'woff\');\n' +
                '            }\n' +
                '        }\n' +
                '\n' +
                '        /* CLIENT-SPECIFIC STYLES */\n' +
                '        body,\n' +
                '        table,\n' +
                '        td,\n' +
                '        a {\n' +
                '            -webkit-text-size-adjust: 100%;\n' +
                '            -ms-text-size-adjust: 100%;\n' +
                '        }\n' +
                '\n' +
                '        table,\n' +
                '        td {\n' +
                '            mso-table-lspace: 0pt;\n' +
                '            mso-table-rspace: 0pt;\n' +
                '        }\n' +
                '\n' +
                '        img {\n' +
                '            -ms-interpolation-mode: bicubic;\n' +
                '        }\n' +
                '\n' +
                '        /* RESET STYLES */\n' +
                '        img {\n' +
                '            border: 0;\n' +
                '            height: auto;\n' +
                '            line-height: 100%;\n' +
                '            outline: none;\n' +
                '            text-decoration: none;\n' +
                '        }\n' +
                '\n' +
                '        table {\n' +
                '            border-collapse: collapse !important;\n' +
                '        }\n' +
                '\n' +
                '        body {\n' +
                '            height: 100% !important;\n' +
                '            margin: 0 !important;\n' +
                '            padding: 0 !important;\n' +
                '            width: 100% !important;\n' +
                '        }\n' +
                '\n' +
                '        /* iOS BLUE LINKS */\n' +
                '        a[x-apple-data-detectors] {\n' +
                '            color: inherit !important;\n' +
                '            text-decoration: none !important;\n' +
                '            font-size: inherit !important;\n' +
                '            font-family: inherit !important;\n' +
                '            font-weight: inherit !important;\n' +
                '            line-height: inherit !important;\n' +
                '        }\n' +
                '\n' +
                '        /* MOBILE STYLES */\n' +
                '        @media screen and (max-width:600px) {\n' +
                '            h1 {\n' +
                '                font-size: 32px !important;\n' +
                '                line-height: 32px !important;\n' +
                '            }\n' +
                '        }\n' +
                '\n' +
                '        /* ANDROID CENTER FIX */\n' +
                '        div[style*="margin: 16px 0;"] {\n' +
                '            margin: 0 !important;\n' +
                '        }\n' +
                '    </style>\n' +
                '   <script> function myFunction() {\n' +
                '  document.getElementById("demo").innerHTML =otp</script>\n'+
                '</head>\n' +
                '\n' +
                '<body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">\n' +
                '    <!-- HIDDEN PREHEADER TEXT -->\n' +
                '    <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: \'Lato\', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We\'re thrilled to have you here! Get ready to dive into your new account. </div>\n' +
                '    <table border="0" cellpadding="0" cellspacing="0" width="100%">\n' +
                '        <!-- LOGO -->\n' +
                '        <tr>\n' +
                '            <td bgcolor="#7d182e" align="center">\n' +
                '                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
                '                    <tr>\n' +
                '                        <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>\n' +
                '                    </tr>\n' +
                '                </table>\n' +
                '            </td>\n' +
                '        </tr>\n' +
                '        <tr>\n' +
                '            <td bgcolor="#7d182e" align="center" style="padding: 0px 10px 0px 10px;">\n' +
                '                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
                '                    <tr>\n' +
                '                        <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">\n' +
                '                            <h1 style="font-size: 48px; font-weight: 400; margin: 2;">Smart Pet Feeder</h1> <img src="https://github.com/cepdnaclk/e17-3yp-Smart-Pet-Feeder/blob/main/MobileApp/assets/images/logo-dark.png?raw=true" width="125" height="120" style="display: block; border: 0px;" />\n' +
                '                        </td>\n' +
                '                    </tr>\n' +
                '                </table>\n' +
                '            </td>\n' +
                '        </tr>\n' +
                '        <tr>\n' +
                '            <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">\n' +
                '                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">\n' +
                '                    <tr>\n' +
                '                        <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
                '                            <p style="margin: 0;">We\'re excited to have you get started. First, you need to confirm your login. Use the otp given below.</p>\n' +
                '                        </td>\n' +
                '                    </tr>\n' +
                '                    <tr>\n' +
                '                        <td bgcolor="#ffffff" align="left">\n' +
                '                            <table width="100%" border="0" cellspacing="0" cellpadding="0">\n' +
                '                                <tr>\n' +
                '                                    <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">\n' +
                '                                        <table border="0" cellspacing="0" cellpadding="0">\n' +
                '                                            <tr>\n' +
                '                                                <td align="center" style="border-radius: 3px;" bgcolor="#7d182e"><a  target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #af0820; display: inline-block;"><p id="demo" onclick="myFunction()"><%= otp %></p></a></td>\n' +
                '                                            </tr>\n' +
                '                                        </table>\n' +
                '                                    </td>\n' +
                '                                </tr>\n' +
                '                            </table>\n' +
                '                        </td>\n' +
                '                    </tr> <!-- COPY -->\n' +
                '                    <tr>\n' +
                '                        <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 0px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
                '                            <p style="margin: 0;">If that doesn\'t work, contact us!</p>\n' +
                '                        </td>\n' +
                '                    </tr> <!-- COPY -->\n' +
                '                   \n' +
                '                    <tr>\n' +
                '                        <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
                '                            <p style="margin: 0;">If you have any questions, just reply to this email—we\'re always happy to help out.</p>\n' +
                '                        </td>\n' +
                '                    </tr>\n' +
                '                    <tr>\n' +
                '                        <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: \'Lato\', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">\n' +
                '                            <p style="margin: 0;">Cheers,<br>Smart Pet Feeder Team</p>\n' +
                '                        </td>\n' +
                '                    </tr>\n' +
                '                </table>\n' +
                '            </td>\n' +
                '        </tr>\n' +
                '       \n' +
                '    </table>\n' +
                '</body>\n' +
                '\n' +
                '</html>\n'
            return ejs.render(sendHtmlEmail,{"otp":otp});


        })
        .then(result=>{
            let transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'smartpetfeederteam@gmail.com',
                    pass: 'Smartpetfeeder@2021'
                }
            });

            let mailOptions = {
                from: 'smartpetfeederteam@gmail.com',
                to: loadUser.email,
                subject: 'Welcome To Smart Pet Feeder',
                html: result
            };

            return transporter.sendMail(mailOptions);

        })
        .then(result=>{
            const oneTimeToken = jwt.sign({
                    userId:loadUser._id
                },
                'One-Time-Token-For-User',
                {expiresIn: '300s'}
            )

            res.status(200).json({
                message:"Secret saved in database",
                idToken:oneTimeToken,
            });
        })
        .catch(err=>{
            next(err);
        })
}


exports.postVerifyLogin =(req,res,next)=>{
    const otp = req.body.otp;
    User.findById(req.userId)
        .then(user=>{
            if (!user){
                const error = new Error("User not found");
                error.statusCode = 404;
                throw error;
            }

            const verified = Speakeasy.totp.verify({
                secret:user.secret,
                encoding:'base32',
                token:otp,
                window:2
            });

            if (verified){
                const accessToken = jwt.sign({
                    email:user.email,
                    userId:user._id.toString()
                },
                    'Smart-Pet-Feeder-2021',
                    {expiresIn: '1h'}
                )

                const refreshToken = jwt.sign({
                    userId:user._id.toString()
                },
                    'SmartPetFeeder2021-refresh'

                )

                res.status(200).json({
                    idToken:accessToken,
                    expiresIn: "3600",
                    refreshToken,
                    userId:user._id.toString()
                })
            }
            else{
                res.status(400).json({message:"Invalid OTP"})
            }

        }).catch(err=>{next(err)});
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
        decodedToken = jwt.verify(refreshToken,'SmartPetFeeder2021-refresh');
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
