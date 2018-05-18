describe('Calculate', function() {
  const expect = require('chai').expect;
  const Calculate = require('../src/calculate.js');

  beforeEach(function() {
    calculate = new Calculate();
  })

  describe('#subTotal', function() {
    it('returns the sub-total cost for the basket item', function() {
      let result = calculate.subtotal(2, 3.6);
      expect(result).to.equal(7.2);
    })
  })

  describe('#grandTotal', function() {
    it('returns the grand-total cost for the basket', function() {
      let result = calculate.grandtotal([7.2, 8.8, 10.4]);
      expect(result).to.equal(26.4);
    })
  })
})
