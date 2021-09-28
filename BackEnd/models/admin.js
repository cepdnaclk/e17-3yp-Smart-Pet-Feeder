const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const adminSchema = new Schema({
    email:{
        type:String,
        required : true
    },
    password:{
        type :String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    mobileNumber:{
        type: String,
        required: true
    },
    secret:{
        type:String,
        required:false
    }


});


module.exports = mongoose.model('Admin',adminSchema);