function renameFiles(names) {
  const noEditStack = []
  const stack = []
  names.forEach(name => {
    if (!noEditStack.includes(name)) {
      noEditStack.push(name)
      stack.includes(name) ? stack.push(name + `(${noEditStack.filter(item => item === name).length})`) : stack.push(name)
    } else {
      noEditStack.push(name)
      stack.push(name + `(${noEditStack.filter(item => item === name).length - 1})`)
    }
  })
  return stack
}


module.exports = {
  renameFiles
};