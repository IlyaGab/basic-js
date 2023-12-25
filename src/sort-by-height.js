function sortByHeight(arr) {
  const sortedArr = arr.reduce((acc, num) => {
    if (num !== -1) {
      acc.push(num)
    }
    return acc
  }, []).sort((a, b) => b - a)

  return arr.map(num => {
    if (num !== -1) {
      return num = sortedArr.pop()
    } else {
      return num
    }
  })
}

module.exports = {
  sortByHeight
};