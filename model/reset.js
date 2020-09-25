// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our token model
var resetTokenSchema = mongoose.Schema({
  id: String,
  token: String,
  createdAt : {type: Date, default: Date.now, expires: 600}
});

resetTokenSchema.methods.generateToken = function(){
  return bcrypt.hashSync(Date.now, bcrypt.genSaltSync(8), null);
}

module.exports = mongoose.model('ResetToken', resetTokenSchema);