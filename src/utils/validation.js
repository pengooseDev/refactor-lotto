const { ERROR, REGEX } = require('./constants');

const isNumber = (input) => {
  const numberRegex = REGEX.NUMBER;
  if (input.match(numberRegex)) return true;

  throw new Error(ERROR.NOT_A_NUMBER);
};

const isValidMoney = (userInput) => {
  isNumber(userInput);
};

module.exports = { isValidMoney };
