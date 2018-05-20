'use strict'

class Formatter {
  constructor() {
    this._selectedCurrency = '£';
  }

  setCurrency(currency) {
    this._selectedCurrency = currency;
  }

  convertToCurrency(number) {
    var result = parseFloat(number).toFixed(2);
    return `${this._selectedCurrency + result}`
  }
}

module.exports = Formatter;
