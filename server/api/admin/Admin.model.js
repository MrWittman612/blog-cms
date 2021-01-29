var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AdminSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
});
// Compile model from schema
var Admin = mongoose.model('Admin', AdminSchema);

exports.User = Admin;
