const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({

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
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:false
    },
    creatorId:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        required:false
    }



});

module.exports = mongoose.model("ActiveSchedule", scheduleSchema);
