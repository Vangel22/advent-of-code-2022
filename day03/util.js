function upperCasePriorities() {
  return new Map([
    ['A', 27],
    ['B', 28],
    ['C', 29],
    ['D', 30],
    ['E', 31],
    ['F', 32],
    ['G', 33],
    ['H', 34],
    ['I', 35],
    ['J', 36],
    ['K', 37],
    ['L', 38],
    ['M', 39],
    ['N', 40],
    ['O', 41],
    ['P', 42],
    ['Q', 43],
    ['R', 44],
    ['S', 45],
    ['T', 46],
    ['U', 47],
    ['V', 48],
    ['W', 49],
    ['X', 50],
    ['Y', 51],
    ['Z', 52],
  ])
}

function lowerCasePriorities() {
  return new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26],
  ])
}

function matchingCharsStored(data) {
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
  return storeChars
}

function calculateChars(storeChars) {
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

  return scores
}

module.exports = {
  lowerCasePriorities,
  upperCasePriorities,
  matchingCharsStored,
  calculateChars,
}
