var http = require('http');
var map = require('through2-map');
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    res.end('send me a POST\.');
  }

  req.pipe(map(function (data) {
    return data.toString().toUpperCase()
  })).pipe(res);
});

server.listen(port);
