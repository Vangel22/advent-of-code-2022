const { data } = require('./data.js')
const { arrayOfInputData } = require('./util')

const sumArr = arrayOfInputData(data)

console.log(Math.max(...sumArr))
