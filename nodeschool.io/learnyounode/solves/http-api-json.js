var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);


function parseDate (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime (time) {
  return { unixtime: time.getTime() };
}

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') { res.end('Send me a GET\.'); }
  var parseUrl = url.parse(req.url, true);
  var time = new Date(parseUrl.query.iso);
  var result;

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parseDate(time);
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time);
  }

  if (result) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(port);
