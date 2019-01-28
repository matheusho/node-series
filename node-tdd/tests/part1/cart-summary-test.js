'use strict';

const chai = require('chai');
const expect = chai.expect;

const sinon = require('sinon');

const CartSummary = require('../../src/part1/cart-summary');
const tax = require('../../src/part1/tax');

const CartSummaryFactory = [
  {
    id: 1,
    quantity: 4,
    price: 10.00
  },
  {
    id: 1,
    quantity: 1,
    price: 30.00
  },
  {
    id: 3,
    quantity: 1,
    price: 40.00
  }
];

describe('CartSummary', () => {
  it('getSubtotal() should be 0 if no items are passed in', () => {
    const cartSummary = new CartSummary([]);
    expect(cartSummary.getSubtotal()).to.equal(0);
  });

  it('getSubtotal() should return a sum of the quantity * price for all items', () => {
    const cartSummary = new CartSummary(CartSummaryFactory);
    expect(cartSummary.getSubtotal()).to.equal(110);
  });
});

describe('getTax', () => {
  beforeEach(() => {
    sinon.stub(tax, 'calculate', (subTotal,state, done) => {
      setTimeout(() => {
        done({
          amount: 30
        });
      }, 0);
    });
  });

  afterEach(() => {
    tax.calculate.restore();
  })

  it('getTax() should execute the callback function with the tax amount', () => {
    const cartSummary = new CartSummary(CartSummaryFactory);
    cartSummary.getTax('NY', (taxAmount) => {
      expect(taxAmount).to.equal(30);
      expect(taxAmount.getCall(0).args[0]).to.equal(300);
      expect(taxAmount.getCall(0).args[1]).to.equal('NY');
      done();
    })
  });
});
