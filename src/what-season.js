function getSeason(date) {
  try {
    if (!date) {
      return "Unable to determine the time of year!";
    }
    if (date instanceof Date === false) {
      throw new Error("Invalid date!");
    }
    if (Object.getOwnPropertyNames(date).length > 0) {
      throw new Error("Invalid date!");
    }
    const month = date.getMonth();
    if (month < 2) {
      return "winter";
    } else if (month < 5) {
      return "spring";
    } else if (month < 8) {
      return "summer";
    } else if (month < 11) {
      return "autumn";
    } else {
      return "winter";
    }
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getSeason
};