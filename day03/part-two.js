const { groupedData } = require('./data-part-two')
const { calculateChars, compareThreeWords } = require('./util')

let storeChars = compareThreeWords(groupedData)

const scores = calculateChars(storeChars)
const result = scores.reduce((acc, curr) => acc + curr)

console.log('result', result)
