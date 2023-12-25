function countCats(matrix) {
  return matrix.reduce((acc, arr) => {
    arr.forEach(item => {
      if (item === '^^') {
        acc++
      }
    })
    return acc
  }, 0)
}

module.exports = {
  countCats
};