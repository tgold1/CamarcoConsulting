const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema=new Schema({
    username:{
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
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    company:{
        type: String,
        required: true,
        unique: true,
    },
    userRole:{
        type: Boolean,
        default: false,
        required: true
        //for determining if the user is an employee or not
        //false = not an employee
    },
    projects:[{
        type: Schema.Types.ObjectId,
        ref:'Project'
    }],
    invoices:[{
        type: Schema.Types.ObjectId,
        ref:'Invoice'
    }]

});
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
  };
  

const User = model('User', userSchema);
  
  module.exports = User;