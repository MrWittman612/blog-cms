var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
});
// Compile model from schema
var User = mongoose.model('User', UserSchema);

exports.User = User;
