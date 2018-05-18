'use strict'

var Calculate = require('./calculate.js')

class BasketItem {
  constructor(item) {
    this._item = item;
    this._quantity = 1;
    this._subTotal = item._unitCost;
    this._calculate = new Calculate();
  }

  updateQuantity(number) {
    this._quantity = number;
    this.updateSubTotal();
  }

  updateSubTotal() {
    this._subTotal = this._calculate.subTotal(this._quantity, this._item._unitCost);
  }
}

module.exports = BasketItem;
