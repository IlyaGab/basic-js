function isMAC48Address(n) {
  if (typeof (n) !== 'string') return false

  const arr = n.split('')

  if (arr.length > 17) return false

  for (let i = 2; i < arr.length; i += 3) {
    if (arr[i] !== '-') return false
  }

  for (let char of n.split('-').join('').split('')) {
    if (isNaN(char)) {
      if (char > 'F') return false
    }
  }
  return true
}

module.exports = {
  isMAC48Address
};