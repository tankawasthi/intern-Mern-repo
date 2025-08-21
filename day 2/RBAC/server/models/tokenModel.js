const mongoose = require("mongoose");
const { blacklist } = require("validator");
const tokenSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    token:{
        type:String,
        required: true
    },
    type:{
        type:String,
        enum:['access','refresh'],
        required:true
    },
    expiresAt:{
        type:Date,
        required: true
    },
    blacklisted:{
        type:Boolean,
        default: false
    }
},{
    timestamps:true
});

tokenSchema.index({expiresAt:1},{expireAfterSeconds:0});

module.exports =mongoose.model('Token',tokenSchema);


