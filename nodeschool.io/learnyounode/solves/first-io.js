var fs = require('fs');
var filePath = process.argv[2];

var content = fs.readFileSync(filePath);
var lines = content.toString().split('\n').length - 1;
console.log(lines);
