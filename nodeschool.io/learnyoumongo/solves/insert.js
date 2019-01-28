var mongo = require('mongodb').MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];
var user = {
  firstName: firstName,
  lastName: lastName
};

var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function (err, db) {
  if (err) throw  err;
  
  var users = db.collection('users');
  users.insert(user, function (err, data) {
    if (err) throw err;
    console.log(JSON.stringify(user));
    db.close();
  });
});
