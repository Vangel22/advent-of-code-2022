const path = require('path')
const fs = require('fs')

const data = fs
  .readFileSync(path.join(__dirname, 'data.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((v) => {
    return v.split(',').map((v) => v.split('-').map((v) => parseInt(v)))
  })

module.exports = {
  data,
}
