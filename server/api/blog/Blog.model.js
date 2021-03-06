var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
    name: String,
    title: String,
    content: String,
    featured: Boolean,
});
// Compile model from schema
var Blog = mongoose.model('Blog', BlogSchema);

exports.Blog = Blog;
