'use strict'

class BasketItem {
  constructor() {
    this._title = ''
  }

  create(item) {
    this._title = item._title;
  }
}

module.exports = BasketItem;
