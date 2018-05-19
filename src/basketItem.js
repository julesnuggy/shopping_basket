'use strict'

class BasketItem {
  constructor(item, calculate) {
    this._item = item;
    this._calculate = calculate;
    this._quantity = 0;
    this._subTotal = item._unitCost;
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
