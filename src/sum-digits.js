function getSumOfDigits(n) {
  const numArr = (n + '').split('')
  if (numArr.length > 1) {
    const sumDigits = numArr.reduce((acc, number) => {
      acc += Number(number)
      return acc
    }, 0)
    return getSumOfDigits(sumDigits)
  } else {
    return n
  }
}


module.exports = {
  getSumOfDigits
};