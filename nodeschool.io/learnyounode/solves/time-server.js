var net = require('net');
var port = Number(process.argv[2]);

function zeroFill(value) {
  return (value < 10 ? '0' : '') + value;
}

function formatDate(date) {
  return date.getFullYear() + '-' +
	 zeroFill(date.getMonth() + 1) + '-' +
	 zeroFill(date.getDate()) + ' ' +
	 zeroFill(date.getHours()) + ':' +
	 zeroFill(date.getMinutes());
}

var server = net.createServer(function (socket) {
  var date = formatDate(new Date());
  socket.write(date);
  socket.end();
});
server.listen(port);
