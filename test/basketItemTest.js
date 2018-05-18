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
      firstItem.create(mountainDew)
      expect(firstItem._title).to.equal('Mountain Dew')
    })
  })
})
