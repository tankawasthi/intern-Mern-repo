const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const validator =require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"please enter your name"],
        trim:true,
    },
    email:{
        type: String,
        required: [true,"please enter your email"],
        unique: true,
        lowercase: true,
        validate:[validator.isEmail,'please enter a valid email']
    },
    password:{
        type:String,
        require:[true, 'please enter your password'],
        minlength:[6,'password must be at least of 6 character'],
      select: false
    },
role:{
    type: String,
    enum:['user','admin','moderator'],
    default:'user'
},
isActive:{
    type:Boolean,
    default: true
}
},{
    timestamps:true
});
// encrypt password before saving into database
userSchema.pre('save',async function (next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password,12);
    next(); 
});

// compare password method

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};
module.exports = mongoose.model('User',userSchema)