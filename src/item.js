'use strict'

class Item {
  constructor() {
    this._title = '';
    this._unitCost = 0;
  }

  create(title, unitCost) {
    this._title = title;
    this._unitCost = unitCost;
  }
}

module.exports = Item;
