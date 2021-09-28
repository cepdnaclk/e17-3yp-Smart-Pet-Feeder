const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    date_time:{
        type:Date,
        required:true
    },
    isHandle:{
        type:Boolean,
        required:true
    },
    reply:{
        type:Object,
        required:true,
        default:{}
    }
});

module.exports = mongoose.model('Feedback',feedbackSchema);