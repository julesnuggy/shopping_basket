import '@assets/favicon.ico'
import '@styles/styles.scss'

/**
 * Welcome! This project has been setup with webpack to — hopefully —
 * just work. You should be able to write JS here and it will be compiled
 * into a file called "bundle.js", which is referenced in the
 * `public/index.html` file.
 *
 * You can either dump all your JS here, or organise it using import/export
 * as this build should fully support ES Modules.
 */

/**
 * Here's an example of importing an image (so webpack processes it)
 * This (as it's an image) will end up in the assets/images directory.
 */
import trump from '@images/trump.jpg'
import BasketItem from './basketItem.js'
import Calculate from './calculate.js'
import Item from './item.js'

let mountainDew = new Item();
mountainDew.create('Mountain Dew', 3.60)

let desperados = new Item();
desperados.create('Desperados', 15.50)

let jackDaniels = new Item();
jackDaniels.create('Jack Daniels', 13.40)

let calculate = new Calculate();
let firstItem = new BasketItem(mountainDew, calculate)
let secondItem = new BasketItem(desperados, calculate)
let thirdItem = new BasketItem(jackDaniels, calculate)

let firstTitle = document.getElementById('firstTitle');
let firstQtyBox = document.getElementById('firstQtyBox');
let firstSubTotal = document.getElementById('firstSubTotal');

let secondTitle = document.getElementById('secondTitle');
let secondQtyBox = document.getElementById('secondQtyBox');
let secondSubTotal = document.getElementById('secondSubTotal');

let thirdTitle = document.getElementById('thirdTitle');
let thirdQtyBox = document.getElementById('thirdQtyBox');
let thirdSubTotal = document.getElementById('thirdSubTotal');


firstTitle.innerHTML = `${firstItem._item._title}`
firstQtyBox.value = `${firstItem._quantity}`
firstSubTotal.innerHTML = `$${firstItem._subTotal}`

secondTitle.innerHTML = `${secondItem._item._title}`
secondQtyBox.value = `${secondItem._quantity}`
secondSubTotal.innerHTML = `$${secondItem._subTotal}`

thirdTitle.innerHTML = `${thirdItem._item._title}`
thirdQtyBox.value = `${thirdItem._quantity}`
thirdSubTotal.innerHTML = `$${thirdItem._subTotal}`
