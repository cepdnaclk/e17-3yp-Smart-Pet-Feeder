const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
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
    creator:{
        type:Schema.Types.ObjectId,
        ref:'Admin',
        required:false
    },
    date_time:{
        type:Date,
        required:false
    },
    isRead:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('Notification',notificationSchema);