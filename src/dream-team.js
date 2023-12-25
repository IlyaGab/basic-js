function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  unsortedTeamName = members.reduce((acc, item) => {
    if (typeof (item) === 'string') {
      acc += item.trim()[0].toUpperCase()
    }
    return acc
  }, '')
  return unsortedTeamName.split('').sort((a, b) => a < b ? -1 : 1).join('')
}

module.exports = {
  createDreamTeam
};