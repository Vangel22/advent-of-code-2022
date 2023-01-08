const fs = require('fs')

const data = fs
  .readFileSync('./day03/data.txt', { encoding: 'utf-8' })
  .replace(/\r/g, '')
  .trim()
  .split('\n')
  .map((word) => {
    let string1 = word.slice(0, word.length / 2)
    let string2 = word.slice(word.length / 2, word.length)

    return [string1, string2]
  })

module.exports = {
  data,
}
