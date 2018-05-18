class SetQuantity {
  constructor() {
    this._item = null
    this._quantity = 1;
  }

  update(item, number) {
    this._item = item;
    this._quantity = number;
    return this._quantity;
  }
}

module.exports = SetQuantity;
