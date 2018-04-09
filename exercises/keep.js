'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */
//const keepFirst = string =>{ 
//	return string.substr(0,2)}

//const keepLast = string =>{ 
//	return string.substr(string.length - 2); 

const keepFirstLast = string =>{ 
return string.substr(2, string.length -4)}




//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirstLast.length, 1)
assert.deepStrictEqual(keepFirstLast('Helene'), ('le'))
// End of tests */
