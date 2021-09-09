const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    battery:{
        type:Number({min:0,max:100}),
        required : false
    },
    status:{
        type :Boolean,
        required: true
    },
    remainingRounds:{
        type:Number,
        required:true,
        default: 4
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true
    }

});


module.exports = mongoose.model('PetFeeder',userSchema);