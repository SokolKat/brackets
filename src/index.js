const assert = require('assert');
module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let mapping = new Map();

  for (let config of bracketsConfig) {
    mapping.set(config[0], config[1]);
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (mapping.has(char)) {
      stack.push(char);
    } else if (stack.length === 0 || char !== mapping.get(stack.pop())) {
      return false;
    }
  }

  return stack.length === 0;
};