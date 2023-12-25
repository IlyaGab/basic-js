function minesweeper(matrix) {
  return matrix.map((arr, arrIndex, arrArray) => {
    return arr.map((num, numIndex, numArray) => {
      let count = 0;

      //upper array
      if (arrIndex !== 0) {
        if (arrArray[arrIndex - 1][numIndex] === true) count++;

        if (numIndex !== 0) {
          if (arrArray[arrIndex - 1][numIndex - 1] === true) count++;
        }

        if (numIndex !== numArray.length - 1) {
          if (arrArray[arrIndex - 1][numIndex + 1] === true) count++;
        }
      }

      //lower array
      if (arrIndex !== arrArray.length - 1) {
        if (arrArray[arrIndex + 1][numIndex] === true) count++;

        if (numIndex !== 0) {
          if (arrArray[arrIndex + 1][numIndex - 1] === true) count++;
        }

        if (numIndex !== numArray.length - 1) {
          if (arrArray[arrIndex + 1][numIndex + 1] === true) count++;
        }
      }

      //same array
      if (numIndex !== 0) {
        if (numArray[numIndex - 1] === true) count++;
      }
      if (numIndex !== numArray.length - 1) {
        if (numArray[numIndex + 1] === true) count++;
      }

      num = count;
      return count;
    });
  });
}

module.exports = {
  minesweeper
};