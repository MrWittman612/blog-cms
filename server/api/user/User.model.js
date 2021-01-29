var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  title: String,
});
// Compile model from schema
var User = mongoose.model('User', UserSchema);

exports.User = User;
