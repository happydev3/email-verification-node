// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String
    },
    active: { type: Boolean, default: false },
    token: String,
    expire: { type: Date, default: Date.now() + 600000 }
}, { timestamps: { createdAt: 'created_at' }});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.generateToken = function(){
  return bcrypt.hashSync(Date.now, bcrypt.genSaltSync(8), null);
}

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
