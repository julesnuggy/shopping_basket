'use strict'

class BasketItem {
  constructor(item, calculate, formatter) {
    this._item = item;
    this._calculate = calculate;
    this._formatter = formatter;
    this._quantity = 0;
    this._subTotal = 0;
  }

  updateQuantity(number, sessionQty, sessionSubTotal) {
    this._quantity = number;
    this.updateSubTotal();
    sessionStorage.setItem(sessionQty, this._quantity);
    var convertedSubTotal = this._formatter.convertToCurrency(this._subTotal)
    sessionStorage.setItem(sessionSubTotal, convertedSubTotal);
  }

  updateSubTotal() {
    this._subTotal = this._calculate.subTotal(this._quantity, this._item._unitCost);
  }

  emptyItem(sessionQty, sessionSubTotal) {
    this.updateQuantity(0)
  }
}

module.exports = BasketItem;
