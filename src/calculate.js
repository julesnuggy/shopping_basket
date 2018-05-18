'use strict'

class Calculate {
  constructor() {
    this._subTotalCost = 0;
    this._grandTotalCost = 0;
  }

  subTotal(quantity, unitCost) {
    this._subTotalCost =  quantity * unitCost;
    return this._subTotalCost;
  }

  grandTotal(arrayOfCosts) {
    var i;
    for (i = 0; i < arrayOfCosts.length; i++) {
      this._grandTotalCost += arrayOfCosts[i];
    }
    return this._grandTotalCost;
  }
}
module.exports = Calculate;
