class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      count += 1;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          const flatArr = arr.flat();
          count += this.calculateDepth(flatArr);
          break;
        }
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};