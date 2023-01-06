const fs = require('fs')

const data = fs
  .readFileSync('./day03/data.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n')

module.exports = {
  data,
}
