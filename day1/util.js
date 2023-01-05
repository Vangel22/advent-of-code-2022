function arrayOfInputData(data) {
  let sumArr = []
  for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {
      let sum = 0
      for (let j = i; j < data.length; j++) {
        if (data[j + 1] === 0) {
          sum += data[j]
          i = j + 1
          break
        } else {
          sum += data[j]
        }
      }
      sumArr.push(sum)
    } else {
      continue
    }
  }
  return sumArr
}

module.exports = {
  arrayOfInputData,
}
