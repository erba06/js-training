'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */
const cutFirstLast = string =>{ 
	return string.slice(2, -2);}


//* Begin of tests

const assert = require('assert')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirstLast.length, 1)
assert.deepStrictEqual(cutFirstLast('Helene'), ('le'))
// End of tests */
