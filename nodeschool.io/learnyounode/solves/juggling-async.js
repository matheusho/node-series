var http = require('http')
var bl = require('bl');
var result = [];
var count = 0;

function printResult () {
  for (var i = 0; i < 3; i++) {
    console.log(result[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) throw err;
      result[index] = data.toString();
      count++;

      if (count === 3) {
        printResult();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}
