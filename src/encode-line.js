function encodeLine(str) {
  let res = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (i < str.length && str[i] === str[i - 1]) {
      count++;
    } else {
      res += count === 1 ? str[i - 1] : `${count}${str[i - 1]}`;
      count = 1;
    }
  }

  return res;
}

module.exports = {
  encodeLine
};