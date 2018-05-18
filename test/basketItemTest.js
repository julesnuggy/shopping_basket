describe('Basket Item', function() {
  const expect = require('chai').expect;
  const sinon = require('sinon');
  const BasketItem = require('../src/basketItem.js');
  const Calculate = require('../src/calculate.js')

  let firstItem, mountainDew, sandbox, calcStub, calcSubTotalStub, calcSubTotalReturns

  beforeEach(function(){
    sandbox = sinon.sandbox.create();
    calcStub = sinon.createStubInstance(Calculate);
    firstItem = new BasketItem();
    mountainDew = {_title: 'Mountain Dew', _unitCost: 3.6};
    firstItem.create(mountainDew);
  })

  // afterEach(function() {
  //   sandbox.restore();
  // })

  describe('#create', function() {
    it('generates a new basket item', function() {
      expect(firstItem._title).to.equal('Mountain Dew');
    })
  })

  describe('#updateQuantity', function() {
    it('updates the quantity of the basket item', function() {
      expect(firstItem._quantity).to.equal(1);
      firstItem.updateQuantity(3);
      expect(firstItem._quantity).to.equal(3);
    })
  })

  describe('#updateSubTotal', function() {
    it('updates the total for the basket item', function() {
      expect(firstItem._subTotal).to.equal(3.6);
      calcSubTotalStub = sandbox.stub(firstItem._calculate, 'subTotal');
      calcSubTotalReturns = calcSubTotalStub.returns(10.8);
      firstItem.updateSubTotal(mountainDew);
      expect(firstItem._subTotal).to.equal(10.8);
    })
  })
})
