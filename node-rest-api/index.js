var app = require('./settings');
var validator = require('validator');
var UserController = require('./controllers/users');

app.get('/', function (req, res) {
  res.end('Servidor ON!');
});

app.get('/users', function (req, res) {
  UserController.list(function (response) {
    res.json(response);
  });
});

app.get('/users/:id', function (req, res) {
  var id = validator.trim(validator.escape(req.params.id));

  UserController.detail(id, function(response) {
    res.json(response);
  });
});

app.post('/users', function (req, res) {
  var name = validator.trim(validator.escape(req.body.name));
  var email = validator.trim(validator.escape(req.body.email));
  var password = validator.trim(validator.escape(req.body.password));

  UserController.create(name, email, password, function (response) {
    res.json(response);
  });
});

app.put('/users/:id', function (req, res) {
  var id = validator.trim(validator.escape(req.body.id));
  var name = validator.trim(validator.escape(req.body.name));
  var email = validator.trim(validator.escape(req.body.email));
  var password = validator.trim(validator.escape(req.body.password));

  UserController.update(id, name, email, password, function (response) {
    res.json(response);
  });
});

app.delete('/users/:id', function (req, res) {
  var id = validator.trim(validator.escape(req.params.id));
  
  UserController.delete(id, function (response) {
    res.json(response);
  });
});
