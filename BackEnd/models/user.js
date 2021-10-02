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
    ActiveSchedules:[activeScheduleSchema],

    ScheduleHistory:[
        {
        type:Schema.Types.ObjectId ,ref:'ActiveSchedule' ,required:false
    }],
    notifications:[{
        type:Schema.Types.ObjectId ,
        ref:'Notification',
        required:true,
        default:[]
    }],
    feedback:[{
        type:Schema.Types.ObjectId,
        ref:'Feedback',
        required:false
    }],
    refreshTokens:[
        {type:String}
    ],
    secret:{
        type:String,
        required:false
    },
    token:{
        type:String,
        required:false
    }

});


module.exports = mongoose.model('User',userSchema);