var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    username: String,
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    password: String,
});
// Compile model from schema
var Admin = mongoose.model('Admin', AdminSchema);
module.exports = {Admin};
// exports.User = Admin;
