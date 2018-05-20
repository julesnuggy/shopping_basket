describe('Formatter', function() {
  const expect = require('chai').expect;
  const Formatter = require('../src/formatter.js');

  let formatter

  beforeEach(function() {
    formatter = new Formatter();
  })

  describe('#setCurrency', function() {
    it('changes the currency from the default £', function() {
      expect(formatter._selectedCurrency).to.equal('£');
      var result = formatter.setCurrency('$');
      expect(formatter._selectedCurrency).to.equal('$');
    })
  })

  describe('#convertToCurrency', function() {
    it('converts a number into currency format', function() {
      formatter._selectedCurrency = '£';
      var result = formatter.convertToCurrency(13.4);
      expect(result).to.equal('£13.40');
    })
  })
})
