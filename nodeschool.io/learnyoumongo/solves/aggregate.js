var mongo = require('mongodb').MongoClient;
var size = process.argv[2];

var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function (err, db) {
  if (err) throw err;

  var prices = db.collection('prices');
  prices.aggregate([
    { $match: {
      size: size
    }},
    { $group: { 
      _id: 'avg',
      avg: { $avg: '$price' }
    }}
    ]).toArray(function (err, results) {
      if (err) throw err;
      if (!results.length) throw new Error('Results not found');

      var obj = results[0];
      console.log(Number(obj.avg).toFixed(2));
      db.close();
    });
  });
