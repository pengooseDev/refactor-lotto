const { ERROR, REGEX, NUMBER } = require('./constants');

const isNumber = (userInput) => {
  const numberRegex = REGEX.NUMBER;
  if (userInput.match(numberRegex)) return true;

  throw new Error(ERROR.NOT_A_NUMBER);
};

const isValidUnit = (userInput) => {
  if (Number(userInput) % NUMBER.UNIT === NUMBER.ZERO) return;

  throw new Error(ERROR.INVALID_UNIT);
};

const isZero = (userInput) => {
  if (Number(userInput) !== Number.ZERO) return;

  throw new Error(ERROR.MIN_PURCHASE);
};

const isValidMoney = (userInput) => {
  isNumber(userInput);
  isZero(userInput);
  isValidUnit(userInput);
};

module.exports = { isValidMoney };
