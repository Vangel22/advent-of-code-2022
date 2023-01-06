const { data } = require('./data.js')
const { getTotalPoints } = require('./util.js')

// Rules:
//     - A - 1 point - Rock
//     - B - 2 point - Paper
//     - C - 3 point - Scissors
//     - X - 1 point - Rock
//     - Y - 1 point - Paper
//     - Z - 1 point - Scissors
//     - Win 6 points, draw 3 points, lose 0 points

const collectPoints = getTotalPoints(data)

const totalScore = collectPoints.reduce((acc, prev) => acc + prev)
console.log(totalScore)
