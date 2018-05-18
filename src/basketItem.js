'use strict'

var Calculate = require('./calculate.js')

class BasketItem {
  constructor() {
    this._title = '';
    this._quantity = 1;
    this._subTotal = 0;
    this._calculate = new Calculate();
  }

  create(item) {
    this._title = item._title;
    this.updateSubTotal(item);
  }

  updateQuantity(number) {
    this._quantity = number;
  }

  updateSubTotal(item) {
    this._subTotal = this._calculate.subTotal(this._quantity, item._unitCost);
  }
}

module.exports = BasketItem;
