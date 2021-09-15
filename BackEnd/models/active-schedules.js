const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title:{
        type:String,
        required : true,
        default:""
    },
    date:{
        type :Date,
        required: false,
        default:""
    },
    time:{
        type:Date,
        required:false,
        default: ""
    },
    featured:{
        type:Boolean,
        required:false,
        default:false
    },
    status:{
        type:Boolean,
        required:false,
        default:false
    }


});


module.exports = mongoose.model('ActiveSchedule',userSchema);