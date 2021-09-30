const jwt = require('jsonwebtoken');



module.exports = (req,res,next) =>{
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token,'One-Time-Token');
    }
    catch (err){
        console.log(err.name ===jwt.TokenExpiredError.name)
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