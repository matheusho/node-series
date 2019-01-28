var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function (err, content) {
  var lines = content.toString().split('\n').length - 1;
  console.log(lines);
});

