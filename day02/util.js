function getTotalPoints(data) {
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

  return collectPoints
}

function alterData(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 1; j >= 0; j--) {
      //END IN LOSE
      if (data[i][j] === 'X') {
        if (data[i][j - 1] === 'A') {
          data[i][j] = 'Z'
          break
        }
        if (data[i][j - 1] === 'C') {
          data[i][j] = 'Y'
          break
        }
      }
      //END IN DRAW
      if (data[i][j] === 'Y') {
        if (data[i][j - 1] === 'A') {
          data[i][j] = 'X'
          break
        }
        if (data[i][j - 1] === 'C') {
          data[i][j] = 'Z'
          break
        }
      }
      //END IN WIN
      if (data[i][j] === 'Z') {
        if (data[i][j - 1] === 'A') {
          data[i][j] = 'Y'
          break
        }
        if (data[i][j - 1] === 'C') {
          data[i][j] = 'X'
          break
        }
      }
    }
  }

  return data
}

module.exports = {
  getTotalPoints,
  alterData,
}
