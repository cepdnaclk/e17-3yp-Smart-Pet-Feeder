const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activeScheduleSchema = require('./active-schedules').schema;


const userSchema = new Schema({
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
    isActive:{
        type:Boolean,
        default:true,
        required:true
    },
    petFeeder:{
        type:Schema.Types.ObjectId,
        ref:'PetFeeder',

    },
    ActiveSchedules:[activeScheduleSchema]
});


module.exports = mongoose.model('User',userSchema);