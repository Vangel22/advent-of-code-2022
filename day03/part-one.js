const { data } = require('./data-part-one')
const { matchingCharsStored, calculateChars } = require('./util')

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

const storeChars = matchingCharsStored(data)
const scores = calculateChars(storeChars)

const result = scores.reduce((acc, curr) => acc + curr)

console.log('result', result)
