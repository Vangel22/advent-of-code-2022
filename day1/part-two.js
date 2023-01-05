const { data } = require('./data.js')
const { arrayOfInputData } = require('./util')

const sumArr = arrayOfInputData(data)

const threeMaxes = sumArr
  .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
  .slice(0, 3)

const sum = threeMaxes.reduce((acc, prev) => acc + prev)
console.log(sum)
