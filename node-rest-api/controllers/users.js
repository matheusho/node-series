var db = require('../db');

exports.list = function (callback) {
  db.User.find({}, function (err, users) {
    if (err) return callback(err);
    callback(users);
  });
};

exports.detail = function (id, callback) {
  db.User.findById(id, function (err, user) {
    if (err) return callback(err);
    callback(user);
  });
};

exports.create = function (name, email, password, callback) {
  new db.User({
    'name': name,
    'email': email,
    'password': password,
    'created_at': new Date()
  }).save(function (err, user) {
    if (err) return callback(err);
    callback(user);
  });
};

exports.update = function (id, name, email, password, callback) {
  db.User.findById(id, function (err, user) {
    if (err) return callback(err);

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      user.password = password;
    }

    user.save(function (err, user) {
      if (err) return callback(err);
      callback(user);
    });
  });
};

exports.delete = function (id, callback) {
  db.User.findById(id, function (err, user) {
    if (err) return callback(err);
    user.remove(function (err) {
      if (err) return callback(err);
      callback('');
    });
  });
};
