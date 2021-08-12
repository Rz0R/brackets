function check(str, bracketsConfig) {

  const OPEN_BRACKETS = [];
  const BRACKETS_PAIR = {};

  for (const brackets of bracketsConfig) {
    OPEN_BRACKETS.push(brackets[0]);
    BRACKETS_PAIR[brackets[1]] = brackets[0];
  }

  let stack = [];

  for (const ch of str) {
    if (OPEN_BRACKETS.includes(ch) && ch === BRACKETS_PAIR[ch]) {
      if (ch === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(ch);
      }
    } else if (OPEN_BRACKETS.includes(ch) && ch !== BRACKETS_PAIR[ch]) {
      stack.push(ch);
    } else {
      if (!stack.length) {
        return false;
      }
      if (BRACKETS_PAIR[ch] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
}

module.exports = check;
