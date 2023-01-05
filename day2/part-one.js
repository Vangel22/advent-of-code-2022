const { data } = require('./data.js')

// Rules:
//     - A - 1 point - Rock
//     - B - 2 point - Paper
//     - C - 3 point - Scissors
//     - X - 1 point - Rock
//     - Y - 1 point - Paper
//     - Z - 1 point - Scissors
//     - Win 6 points, draw 3 points, lose 0 points

let collectPoints = []

for (let i = 0; i < data.length; i++) {
  let points = 0
  for (let j = 1; j >= 0; j--) {
    if (data[i][j] === 'X') {
      //ROCK
      points += 1
      if (data[i][j - 1] === 'A') {
        //draw
        points += 3
      }
      if (data[i][j - 1] === 'C') {
        //win
        points += 6
      }
    }
    if (data[i][j] === 'Y') {
      //PAPER
      points += 2
      if (data[i][j - 1] === 'B') {
        //draw
        points += 3
      }
      if (data[i][j - 1] === 'A') {
        //win
        points += 6
      }
    }
    if (data[i][j] === 'Z') {
      //SCISSORS
      points += 3
      if (data[i][j - 1] === 'C') {
        //draw
        points += 3
      }
      if (data[i][j - 1] === 'B') {
        //win
        points += 6
      }
    }
  }
  collectPoints.push(points)
}

const totalScore = collectPoints.reduce((acc, prev) => acc + prev)
console.log(totalScore)
