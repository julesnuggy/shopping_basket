describe('Item', function() {
  const expect = require('chai').expect;

  beforeEach(function(){
    var item = new Item();
  })

  describe('#create', function() {
    it('gives the item a title', function() {
      var mountainDew = item.create('Mountain Dew', 3.6)
      expect(mountainDew.title).to.equal('Mountain Dew')
    })

    it('gives the item a unit cost', function() {
      var mountainDew = item.create('Mountain Dew', 3.6)
      expect(mountainDew.unitCost).to.equal(3.6)
    })

  })
})
