describe('Calculate', () => {
  const expect = require('chai').expect;
  const Calculate = require('../src/calculate.js');

  beforeEach(() => {
    calculate = new Calculate();
  })

  describe('#subTotal', () => {
    it('returns the sub-total cost for the basket item', () => {
      let result = calculate.subTotal(2, 3.6);
      expect(result).to.equal(7.2);
    })
  })

  describe('#grandTotal', () => {
    it('returns the grand-total cost for the basket', () => {
      let items_array = [{
        _subTotal: 7.2
      }, {
        _subTotal: 8.8
      }, {
        _subTotal: 10.4
      }];
      let result = calculate.grandTotal(items_array);
      expect(result).to.equal(26.4);
    })
  })
})
