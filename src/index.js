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
mountainDew.create('Mountain Dew', 3.6)

let calculate = new Calculate();
let firstItem = new BasketItem(mountainDew, calculate)

const root = document.createElement("div")
root.innerHTML = `<p>${firstItem._item._title} || ${firstItem._quantity} || $${firstItem._subTotal} </p>`
document.body.appendChild(root)
