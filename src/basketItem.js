'use strict'

class BasketItem {
  constructor(item, calculate) {
    this._item = item;
    this._calculate = calculate;
    this._quantity = 0;
    this._subTotal = 0;
  }

  updateQuantity(number, sessionQty, sessionSubTotal, qtyHtmlEl, subTotalHtmlEl) {
    this._quantity = number;
    this.updateSubTotal();
    sessionStorage.setItem(sessionQty, number);
    qtyHtmlEl.innerHTML = sessionStorage.getItem(sessionQty);
    sessionStorage.setItem(sessionSubTotal, this._subTotal);
    subTotalHtmlEl.innerHTML = sessionStorage.getItem(sessionSubTotal);
  }

  updateSubTotal() {
    this._subTotal = this._calculate.subTotal(this._quantity, this._item._unitCost);
  }
}

module.exports = BasketItem;
