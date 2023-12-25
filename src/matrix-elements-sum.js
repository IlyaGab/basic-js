function getMatrixElementsSum(matrix) {
  const zeroIndex = []
  return matrix.reduce((acc, array) => {
    array.forEach((number, index) => {
      if (number === 0 & !zeroIndex.includes(index)) {
        zeroIndex.push(index)
      }
      if (!zeroIndex.includes(index)) {
        acc += number
      }
    })
    return acc
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};