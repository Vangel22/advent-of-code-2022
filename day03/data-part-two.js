const fs = require('fs')

const data = fs
  .readFileSync('./day03/data.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n')

let groupedData = []

for (let i = 0; i < data.length; i += 3) {
  groupedData.push([[data[i]], [data[i + 1]], [data[i + 2]]])
}

module.exports = {
  groupedData,
}
