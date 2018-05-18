describe('Basket Item', function() {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const BasketItem = require('../src/basketItem.js');
  const SetQuantity = require('../src/setQuantity.js')

  let firstItem, mountainDew, setQuantity, calcSubtotal

  beforeEach(function(){
    firstItem = new BasketItem();
    mountainDew = {_title: 'Mountain Dew', _unitCost: 3.6};
    // quantityStub = sinon.stub(SetQuantity, 'update');
    // quantityReturns = quantityStub.returns(2);
  })

  describe('#create', function() {
    it('generates a new basket item', function() {
      firstItem.create(mountainDew);
      expect(firstItem._title).to.equal('Mountain Dew');
    })
  })

  describe('#updateQuantity', function() {
    it('updates the quantity of the basket item', function() {
      firstItem.create(mountainDew);
      expect(firstItem._quantity).to.equal(1)
      firstItem.updateQuantity(3);
      expect(firstItem._quantity).to.equal(3)
    })
  })
})
