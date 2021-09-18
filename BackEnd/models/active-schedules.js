const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title:{
        type:String,
        required : false,
        default:""
    },
    date_time:{
        type :Date,
        required: false,
        default:""
    },
    status:{
        type:Boolean,
        required:false,
        default:false
    }


});


module.exports = mongoose.model('ActiveSchedule',userSchema);