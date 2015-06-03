var mongoose = require('mongoose');
var Mixed = mongoose.Schema.Types.Mixed;

mongoose.connect(process.env.MONGO_URL);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Database is now connected");
});

var userSchema = mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.validPassword = function(password) {
  return this.password == password;
}

var documentSchema = mongoose.Schema({
  _username: String,

  id: String,
  data: Mixed
})

documentSchema.methods.toJSON = function() {
  var obj = this.toObject()

  // remove hidden fields
  delete obj._username;
  delete obj._id;
  delete obj.__v;

  return obj
}

module.exports.User = mongoose.model('User', userSchema);
module.exports.Document = mongoose.model('Document', documentSchema);
module.exports.connection = db;
