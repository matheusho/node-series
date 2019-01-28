'use strict';

module.exports = {
  calculate: (subTotal, state, done) => {
    setTimeout(() => {
      done({
        amount: 30
      });
    }, 0);
  }
};
