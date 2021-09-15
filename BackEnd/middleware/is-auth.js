const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    const token = req.get('Authorization').split(' ')[1];
    console.log(token)
    let decodedToken;
    try{
        decodedToken = jwt.verify(token,'Smart-Pet-Feeder-2021');
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
    req.userId = decodedToken.userId;
    next();
}