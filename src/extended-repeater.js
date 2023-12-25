function repeater(str, options) {
  const {
    repeatTimes = 1,
      separator = "+",
      addition = "",
      additionRepeatTimes = 1,
      additionSeparator = "|",
  } = options;

  const additionString = Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);

  const mainString = String(str) + additionString;

  return Array(repeatTimes).fill(mainString).join(separator);
}

module.exports = {
  repeater
};