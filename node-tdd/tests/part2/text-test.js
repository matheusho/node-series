'use strict';

const chai = require('chai');
const expect = chai.expect;
const nock = require('nock');

const tax = require('../../src/part2/tax');

it('calculate() should resolve with an object containing the tax details', function (done) {
  nock('https://some-tax-services.com')
    .post('/request')
    .reply(200, function (uri, requestBody) {
      return {
        amount: JSON.parse(requestBody).subtotal * 0.10
      };
    });

  tax.calculate(100, 'NY', (taxDetails) => {
    expect(taxDetails).to.eql({ amount: 0 });
    done();
  });
});
