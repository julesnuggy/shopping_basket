describe('Basket Item', function() {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const localStorage = require('mock-local-storage')
  const BasketItem = require('../src/basketItem.js');
  const Calculate = require('../src/calculate.js')

  let firstItem, mountainDew, sandbox, calcStub, calcSubTotalStub, calcSubTotalReturns

  beforeEach(function(){
    calcStub = sinon.createStubInstance(Calculate);
    mountainDew = {_title: 'Mountain Dew', _unitCost: 3.6};
    firstItem = new BasketItem(mountainDew, calcStub);
  })

  describe('#new', function() {
    it('generates a new basket item', function() {
      expect(firstItem._item).to.equal(mountainDew);
    })
  })

  describe('#updateQuantity', function() {
    it('updates the quantity of the basket item', function() {
      global.window = {}
      global.div = {}
      window.localStorage = global.localStorage
      expect(firstItem._quantity).to.equal(0);
      firstItem.updateQuantity(3, 'qty', 'subtotal');
      expect(firstItem._quantity).to.equal(3);
    })
  })

  describe('#updateSubTotal', function() {
    it('updates the total for the basket item', function() {
      expect(firstItem._subTotal).to.equal(0);
      calcStub.subTotal.returns(10.8);
      firstItem.updateSubTotal();
      expect(firstItem._subTotal).to.equal(10.8);
    })
  })

  describe('#emptyItem', function() {
    it('sets the quantity of the basket item to 0', function() {
      global.window = {}
      global.div = {}
      window.localStorage = global.localStorage
      firstItem.emptyItem('qty', 'subtotal');
      expect(firstItem._quantity).to.equal(0);
    })
  })
})
