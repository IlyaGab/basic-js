function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  return arr.flatMap((value, index, array) => {
    if (
      array[index + 1] === "--double-prev" &&
      array[index - 1] === "--discard-next"
    ) {
      return [];
    } else if (
      array[index + 1] === "--double-prev" &&
      array[index - 1] === "--double-next"
    ) {
      return [value, value, value];
    } else if (
      array[index + 1] === "--discard-prev" &&
      array[index - 1] === "--discard-next"
    ) {
      return [];
    } else if (
      array[index + 1] === "--discard-prev" &&
      array[index - 1] === "--double-next"
    ) {
      return [value];
    } else if (array[index + 1] === "--discard-prev") {
      return [];
    } else if (array[index + 1] === "--double-prev") {
      return [value, value];
    }

    if (array[index - 1] === "--double-next") {
      return [value, value];
    } else if (array[index - 1] === "--discard-next") {
      return [];
    }

    if (
      [
        "--discard-prev",
        "--discard-next",
        "--double-prev",
        "--double-next",
      ].includes(value.toString())
    ) {
      return [];
    }

    return value;
  });
}

module.exports = {
  transform
};