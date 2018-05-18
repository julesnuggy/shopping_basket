describe('SetQuantity', function() {
  const expect = require('chai').expect;
  const SetQuantity = require('../src/setQuantity.js');
  let setQuantity
  let mountainDew

  describe('#update', function(){
    beforeEach(function() {
      mountainDew = {_title: 'Mountain Dew', _unitCost: 3.6}
      setQuantity = new SetQuantity();
    })

    it('returns the quantity for the item being set', function() {
      setQuantity.update(mountainDew, 2)
      expect(setQuantity._quantity).to.equal(2);
    })
  })
})
