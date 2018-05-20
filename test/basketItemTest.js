describe('Basket Item', () => {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const localStorage = require('mock-local-storage')
  const BasketItem = require('../src/basketItem.js');
  const Calculate = require('../src/calculate.js')
  const Formatter = require('../src/formatter.js')

  let firstItem, mountainDew, sandbox, calcStub, calcSubTotalStub,
    calcSubTotalReturns, formatterStub

  beforeEach(() => {
    calcStub = sinon.createStubInstance(Calculate);
    formatterStub = sinon.createStubInstance(Formatter);
    mountainDew = {
      _title: 'Mountain Dew',
      _unitCost: 3.6
    };
    firstItem = new BasketItem(mountainDew, calcStub, formatterStub);
  })

  describe('#new', () => {
    it('generates a new basket item', () => {
      expect(firstItem._item).to.equal(mountainDew);
    })
  })

  describe('#updateQuantity', () => {
    it('updates the quantity of the basket item', () => {
      global.window = {}
      global.div = {}
      window.localStorage = global.localStorage
      expect(firstItem._quantity).to.equal(0);
      formatterStub.convertToCurrency.returns('£3.00');
      firstItem.updateQuantity(3, 'qty', 'subtotal');
      expect(firstItem._quantity).to.equal(3);
    })
  })

  describe('#updateSubTotal', () => {
    it('updates the total for the basket item', () => {
      expect(firstItem._subTotal).to.equal(0);
      calcStub.subTotal.returns(10.8);
      firstItem.updateSubTotal();
      expect(firstItem._subTotal).to.equal(10.8);
    })
  })

  describe('#emptyItem', () => {
    it('sets the quantity of the basket item to 0', () => {
      global.window = {}
      global.div = {}
      window.localStorage = global.localStorage
      firstItem.emptyItem('qty', 'subtotal');
      expect(firstItem._quantity).to.equal(0);
    })
  })
})
