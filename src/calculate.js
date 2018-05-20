'use strict'

class Calculate {
  constructor() {
    this._subTotalCost = 0;
  }

  subTotal(quantity, unitCost) {
    this._subTotalCost =  quantity * unitCost;
    return this._subTotalCost;
  }

  grandTotal(objects) {
    this._grandTotalCost = 0;
    var i;
    for (i = 0; i < objects.length; i++) {
      this._grandTotalCost += objects[i]._subTotal;
    }
    return this._grandTotalCost;
  }

  calculateAll(quantity, unitCost, objects) {
    this.subTotal(quantity, unitCost);
    this.grandTotal(objects);
  }

}
module.exports = Calculate;
