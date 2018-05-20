import '@assets/favicon.ico'
import '@styles/styles.scss'

import BasketItem from './basketItem.js'
import Calculate from './calculate.js'
import Item from './item.js'

let calculate = new Calculate();

let mountainDew = new Item();
mountainDew.create('Mountain Dew', 3.60)

let desperados = new Item();
desperados.create('Desperados', 15.50)

let jackDaniels = new Item();
jackDaniels.create('Jack Daniels', 13.40)

let firstItem = new BasketItem(mountainDew, calculate);
let secondItem = new BasketItem(desperados, calculate);
let thirdItem = new BasketItem(jackDaniels, calculate);

let items_array = [firstItem, secondItem, thirdItem];

let firstTitle = document.getElementById('firstTitle');
let firstQty = document.getElementById('firstQty');
let firstQtyBox = document.getElementById('firstQtyBox');
let firstQtyUpdate = document.getElementById('firstQtyUpdate');
let firstSubTotal = document.getElementById('firstSubTotal');

let secondTitle = document.getElementById('secondTitle');
let secondQty = document.getElementById('secondQty');
let secondQtyBox = document.getElementById('secondQtyBox');
let secondQtyUpdate = document.getElementById('secondQtyUpdate');
let secondSubTotal = document.getElementById('secondSubTotal');

let thirdTitle = document.getElementById('thirdTitle');
let thirdQty = document.getElementById('thirdQty');
let thirdQtyBox = document.getElementById('thirdQtyBox');
let thirdQtyUpdate = document.getElementById('thirdQtyUpdate');
let thirdSubTotal = document.getElementById('thirdSubTotal');

let grandTotalAmount = document.getElementById('grandTotalAmount');
grandTotalAmount.innerHTML = calculate.grandTotal(items_array);

sessionStorage.setItem('firstQty', firstItem._quantity);
sessionStorage.setItem('firstSubTotal', firstItem._subTotal);

firstTitle.innerHTML = `${firstItem._item._title}`;
firstQty.innerHTML = sessionStorage.getItem('firstQty');
firstQtyBox.value = firstQty.innerHTML;
firstSubTotal.innerHTML = sessionStorage.getItem('firstSubTotal');
firstQtyUpdate.onclick = () => updateItemValues(firstItem, firstQtyBox.value, 'firstQty', firstQty, 'firstSubTotal', firstSubTotal);

sessionStorage.setItem('secondQty', secondItem._quantity);
sessionStorage.setItem('secondSubTotal', secondItem._subTotal);

secondTitle.innerHTML = `${secondItem._item._title}`;
secondQty.innerHTML = sessionStorage.getItem('secondQty');
secondQtyBox.value = secondQty.innerHTML;
secondSubTotal.innerHTML = sessionStorage.getItem('secondSubTotal');
secondQtyUpdate.onclick = () => updateItemValues(secondItem, secondQtyBox.value, 'secondQty', secondQty, 'secondSubTotal', secondSubTotal);

sessionStorage.setItem('thirdQty', thirdItem._quantity);
sessionStorage.setItem('thirdSubTotal', thirdItem._subTotal);

thirdTitle.innerHTML = `${thirdItem._item._title}`;
thirdQty.innerHTML = sessionStorage.getItem('thirdQty');
thirdQtyBox.value = thirdQty.innerHTML;
thirdSubTotal.innerHTML = sessionStorage.getItem('thirdSubTotal');
thirdQtyUpdate.onclick = () => updateItemValues(thirdItem, thirdQtyBox.value, 'thirdQty', thirdQty, 'thirdSubTotal', thirdSubTotal);

function updateItemValues(item, qtyBoxValue, sessQty, sessQtyEl, sessSubTotal, sessSubTotalEl) {
  item.updateQuantity(qtyBoxValue, sessQty, sessSubTotal);
  sessQtyEl.innerHTML = sessionStorage.getItem(sessQty);
  sessSubTotalEl.innerHTML = sessionStorage.getItem(sessSubTotal);
  grandTotalAmount.innerHTML = calculate.grandTotal(items_array);
};

let clearAll = document.getElementById('clearAllButton');
clearAll.onclick = () => {
  var input = document.getElementsByTagName('input')
  var i;
  for (i = 0; i<input.length; i++) {
    if (input[i].type === "text") {
      input[i].value = 0;
    } else if (input[i].type === "button") {
      input[i].click();
    }
  }
}
