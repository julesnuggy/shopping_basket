describe('Basket Item', function() {
  const expect = require('chai').expect;
  const BasketItem = require('../src/basketItem.js');
  const SetQuantity = require('../src/setQuantity.js')

  let firstItem, mountainDew, setQuantity, calcSubtotal

  describe('#create', function() {
    beforeEach(function(){
      firstItem = new BasketItem();
      mountainDew = {_title: 'Mountain Dew', _unitCost: 3.6};
    })

    it('generates a new basket item', function() {
      quantityStub = sinon.stub(SetQuantity, 'update')
      quantityReturns = quantityStub.returns(2);
      firstItem.create(mountainDew, setQuantity, calcSubtotal)
    })
  })
})
