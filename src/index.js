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

let firstTitle = document.getElementById('firstTitle');
let firstQty = document.getElementById('firstQty');
let firstQtyBox = document.getElementById('firstQtyBox');
let firstSubmit = document.getElementById('firstSubmit');
let firstSubTotal = document.getElementById('firstSubTotal');

let secondTitle = document.getElementById('secondTitle');
let secondQty = document.getElementById('secondQty');
let secondQtyBox = document.getElementById('secondQtyBox');
let secondSubmit = document.getElementById('secondSubmit');
let secondSubTotal = document.getElementById('secondSubTotal');

let thirdTitle = document.getElementById('thirdTitle');
let thirdQty = document.getElementById('thirdQty');
let thirdQtyBox = document.getElementById('thirdQtyBox');
let thirdSubmit = document.getElementById('thirdSubmit');
let thirdSubTotal = document.getElementById('thirdSubTotal');

let grandTotalAmount = document.getElementById('grandTotalAmount');

sessionStorage.setItem('firstQty', firstItem._quantity);
sessionStorage.setItem('firstSubTotal', firstItem._subTotal);

firstTitle.innerHTML = `${firstItem._item._title}`;
firstQty.innerHTML = sessionStorage.getItem('firstQty');
firstQtyBox.value = firstQty.innerHTML;
firstSubTotal.innerHTML = sessionStorage.getItem('firstSubTotal');
firstSubmit.onclick = function() {
  var updateObj = firstItem.updateQuantity(firstQtyBox.value, 'firstQty', 'firstSubTotal');
  firstQty.innerHTML = sessionStorage.getItem('firstQty');
  firstSubTotal.innerHTML = sessionStorage.getItem('firstSubTotal');;
}

sessionStorage.setItem('secondQty', secondItem._quantity);
sessionStorage.setItem('secondSubTotal', secondItem._subTotal);

secondTitle.innerHTML = `${secondItem._item._title}`;
secondQty.innerHTML = sessionStorage.getItem('secondQty');
secondQtyBox.value = secondQty.innerHTML;
secondSubTotal.innerHTML = sessionStorage.getItem('secondSubTotal');
secondSubmit.onclick = function() {
  var updateObj = secondItem.updateQuantity(secondQtyBox.value, 'secondQty', 'secondSubTotal');
  secondQty.innerHTML = sessionStorage.getItem('secondQty');
  secondSubTotal.innerHTML = sessionStorage.getItem('secondSubTotal');
}

sessionStorage.setItem('thirdQty', thirdItem._quantity);
sessionStorage.setItem('thirdSubTotal', thirdItem._subTotal);

thirdTitle.innerHTML = `${thirdItem._item._title}`;
thirdQty.innerHTML = sessionStorage.getItem('thirdQty');
thirdQtyBox.value = thirdQty.innerHTML;
thirdSubTotal.innerHTML = sessionStorage.getItem('thirdSubTotal');
thirdSubmit.onclick = function() {
  var updateObj = thirdItem.updateQuantity(thirdQtyBox.value, 'thirdQty', 'thirdSubTotal');
  thirdQty.innerHTML = sessionStorage.getItem('thirdQty');
  thirdSubTotal.innerHTML = sessionStorage.getItem('thirdSubTotal');
}

grandTotalAmount.innerHTML = `$${calculate.grandTotal([firstItem._subTotal, secondItem._subTotal, thirdItem._subTotal])}`
