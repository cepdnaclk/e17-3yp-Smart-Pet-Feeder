const jwt = require('jsonwebtoken');

module.exports = (req,res,next) =>{
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token,'Smart-Pet-Feeder-2021-Admin');
    }
    catch (err){
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken){
        const error = new Error('You are not authenticated!');
        error.statusCode = 401;
        throw error;
    }
    req.adminId = decodedToken.adminId;
    next();
}