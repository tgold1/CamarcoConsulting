const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema=new Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
    },
    userRole:{
        type: Boolean,
        required: true
    }
})

const User = model('User', userSchema);
  
  module.exports = User;