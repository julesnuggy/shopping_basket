describe('Item', () => {
  const expect = require('chai').expect;
  const Item = require('../src/item.js');
  let mountainDew

  describe('#create', () => {
    beforeEach(() => {
      mountainDew = new Item();
      mountainDew.create('Mountain Dew', 3.6)
    })

    it('gives the item a title', () => {
      expect(mountainDew._title).to.equal('Mountain Dew')
    })

    it('gives the item a unit cost', () => {
      expect(mountainDew._unitCost).to.equal(3.6)
    })

  })
})
