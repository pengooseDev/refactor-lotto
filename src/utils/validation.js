const { ERROR, REGEX } = require('./constants');

const isValidType = (input) => {
  const numberRegex = REGEX.NUMBER;
  if (input.match(numberRegex)) return true;

  throw new Error(ERROR.NOT_A_NUMBER);
};

module.exports = {};
