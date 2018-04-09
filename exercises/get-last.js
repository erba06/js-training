'use strict'

/*
 * Create a getLast function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 */

// Your code :

const myArray = [2, 42, "pouet"];
const getLast = lg => {
	return lg[lg.length - 1]
}
console.log(getLast(myArray))

//* Begin of tests
const assert = require('assert')

assert.strictEqual(getLast([ 2, 42 ]), 42)
assert.strictEqual(getLast([ 'pouet', 4, true ]), true)
assert.strictEqual(getLast([ getLast ]), getLast)
assert.strictEqual(getLast('salut'), 't')
assert.strictEqual(getLast([]), undefined)
// End of tests */
