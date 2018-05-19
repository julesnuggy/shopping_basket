'use strict'

class BasketItem {
  constructor(item, calculate) {
    this._item = item;
    this._calculate = calculate;
    this._quantity = 0;
    this._subTotal = 0;
  }

  updateQuantity(number, sessionVariable, htmlElement) {
    this._quantity = number;
    this.updateSubTotal();
    sessionStorage.setItem(sessionVariable, number);
    htmlElement.innerHTML = sessionStorage.getItem(sessionVariable);
  }

  updateSubTotal() {
    this._subTotal = this._calculate.subTotal(this._quantity, this._item._unitCost);
  }
}

module.exports = BasketItem;
