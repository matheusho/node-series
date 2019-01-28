var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();

var allowCors = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Never use '*' (wildcard) in production. This is a test, OK?
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', true);
  next();
};

// set parse body request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// enable cors
app.use(allowCors);

var port = (process.env.PORT || 5000);
app.listen(port, function () {
  console.log('Listening https://127.0.0.1:' + port);
});
