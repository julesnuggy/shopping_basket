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



let firstRow = document.getElementById('firstItem');
let secondRow = document.getElementById('secondItem');
let thirdRow = document.getElementById('thirdItem');

firstRow.innerHTML = `<div>${firstItem._item._title} || ${firstItem._quantity} || $${firstItem._subTotal} </div>`

secondRow.innerHTML = `<div>${secondItem._item._title} || ${secondItem._quantity} || $${secondItem._subTotal} </div>`

thirdRow.innerHTML = `<div>${thirdItem._item._title} || ${thirdItem._quantity} || $${thirdItem._subTotal} </div>`
