var mongoose = require('mongoose');

// DB and Models
var connectionString = 'mongodb://127.0.01/node_api';
var conn = mongoose.connect(connectionString);
var db = conn.connection;

db.on('error', console.log.bind(console, 'Erro ao conectar no banco'));

db.once('open', function () {
  var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    created_at: Date,
  });
  exports.User = mongoose.model('User', userSchema);
});
