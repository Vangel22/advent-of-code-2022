const fs = require('fs')

const data = fs
  .readFileSync('./day02/data.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n')
  .map((line) => line.split(' '))

module.exports = {
  data,
}
