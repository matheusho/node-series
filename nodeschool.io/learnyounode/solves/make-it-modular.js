var checkFiles = require('./make-it-modular-module');
var dir = process.argv[2];
var extname = process.argv[3];

checkFiles(dir, extname, function (err, data) {
  if (err) throw err;

  data.forEach(function (file) {
    console.log(file);
  });
});
