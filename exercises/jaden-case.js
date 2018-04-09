'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */
const jadenCase = string =>{
	return string.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}



//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('helene blanchard'), 'Helene Blanchard')

// End of tests */
