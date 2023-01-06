const path = require('path')
const fs = require('fs')

const data = fs
  .readFileSync('./day01/data.txt', { encoding: 'utf-8' })
  .trim()
  .replace('\n\n', 0)
  .split('\n')
  .map(Number)

module.exports = {
  data,
}
