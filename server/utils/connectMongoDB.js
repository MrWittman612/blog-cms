var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/blog-cms-v1';
function connectMongoDB() {
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  //Get the default connection
  var db = mongoose.connection;
  //Bind connection to error event (to get notification of connection errors)
  db.on('connected', console.error.bind(console, 'MongoDB connected'));
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
exports.connectMongoDB = connectMongoDB;
