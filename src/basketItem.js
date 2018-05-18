'use strict'

class BasketItem {
  constructor() {
    this._title = '';
    this._quantity = 1;
    this._subTotal = 0;
  }

  create(item) {
    this._title = item._title;
  }

  updateQuantity(number) {
    this._quantity = number;
  }


}

module.exports = BasketItem;
