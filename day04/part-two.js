const { data } = require('./data')
const { range, intersection } = require('./utils')

const intersectedPairs = data.filter(([a, b]) => {
  const a_range = range(...a)
  const b_range = range(...b)

  const intersected = intersection(a_range, b_range)

  return intersected.length > 0
})

console.log(intersectedPairs.length)
