describe('Formatter', () => {
  const expect = require('chai').expect;
  const Formatter = require('../src/formatter.js');

  let formatter

  beforeEach(() => {
    formatter = new Formatter();
  })

  describe('#setCurrency', () => {
    it('changes the currency from the default £', () => {
      expect(formatter._selectedCurrency).to.equal('£');
      var result = formatter.setCurrency('$');
      expect(formatter._selectedCurrency).to.equal('$');
    })
  })

  describe('#convertToCurrency', () => {
    it('converts a number into currency format', () => {
      formatter._selectedCurrency = '£';
      var result = formatter.convertToCurrency(13.4);
      expect(result).to.equal('£13.40');
    })
  })
})
