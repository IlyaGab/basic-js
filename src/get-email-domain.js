function getEmailDomain(email) {
  const arr = email.split('')
  return arr.includes('@') ? arr.slice(arr.lastIndexOf('@') + 1).join('') : false

}

module.exports = {
  getEmailDomain
};