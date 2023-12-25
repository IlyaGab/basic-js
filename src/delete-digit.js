function deleteDigit(n) {
  const arrNum = (n + '').split('')
  let maxNum = 0
  for (let i = 0; i < arrNum.length; i++) {
    const newNum = Number(arrNum.filter((num, index) => index !== i).join(''))
    if (newNum > maxNum) {
      maxNum = newNum
    }
  }
  return maxNum
}

module.exports = {
  deleteDigit
};