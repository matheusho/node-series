const request = require('request');

module.exports = {
  calculate: function (subTotal, state, done) {
    if (state !== 'CA') {
      return done({ amount: 0 });
    }

    request.post({
      url: 'https://some-tax-services./com/request',
      json: {
        subTotal: subTotal
      }
    },
    function (err, response, body) {
      done(body);
    });
  }
};
