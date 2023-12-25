function getDNSStats(domains) {
  const domainsArray = [];
  return domains
    .map((item) => {
      item = item.split(".").reverse();
      return item;
    })
    .reduce((acc, item) => {
      let prev = "";
      item.forEach((newItem) => {
        prev += `.${newItem}`;
        if (!domainsArray.includes(prev)) {
          acc[prev] = 1;
          domainsArray.push(prev);
        } else {
          acc[prev] += 1;
        }
      });
      return acc;
    }, {});
}

module.exports = {
  getDNSStats
};