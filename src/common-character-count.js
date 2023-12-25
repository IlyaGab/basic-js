function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split("");
  const arr2 = s2.split("");
  let count = 0;

  arr1.forEach((char) => {
    if (arr2.includes(char)) {
      count++;
      deleteFromArray(arr2, char);
    }
  });
  return count;

  function deleteFromArray(arr, item) {
    arr.splice(arr.indexOf(item), 1);
  }
}

module.exports = {
  getCommonCharacterCount
};