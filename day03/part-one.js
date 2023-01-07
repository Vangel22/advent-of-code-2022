const { data } = require('./data')
const { lowerCasePriorities, upperCasePriorities } = require('./util')

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

let storeChars = []

for (let i = 0; i < data.length; i++) {
  const wordOneChars = [...data[i][0]]
  const wordTwoChars = [...data[i][1]]
  let stopOne = false
  let stopTwo = false

  if (wordOneChars.length <= wordTwoChars.length) {
    for (let i = 0; i < wordOneChars.length; i++) {
      for (let j = 0; j < wordTwoChars.length; j++) {
        if (wordOneChars[i] === wordTwoChars[j]) {
          storeChars.push(wordOneChars[i])
          stopOne = true
          break
        }
      }
      if (stopOne) break
    }
  } else {
    for (let i = 0; i < wordTwoChars.length; i++) {
      for (let j = 0; j < wordOneChars.length; j++) {
        if (wordTwoChars[i] === wordOneChars[j]) {
          storeChars.push(wordTwoChars[i])
          stopTwo = true
          break
        }
      }
      if (stopTwo) break
    }
  }
}

const mapLower = lowerCasePriorities()
const mapUpper = upperCasePriorities()

let scores = []

storeChars.forEach((k) => {
  const lowercase = mapLower.get(k)
  if (!lowercase) {
    scores.push(mapUpper.get(k))
  } else {
    scores.push(lowercase)
  }
})

const result = scores.reduce((acc, curr) => acc + curr)

console.log('result', result)
