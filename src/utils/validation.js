const { ERROR, REGEX, NUMBER, TICKET } = require('./constants');

/* Money Validation */
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

/* Lotto Number Validation */
const isIncludeComma = (userInput) => {
  if (userInput.includes(TICKET.COMMA)) return;

  throw new Error(ERROR.NOT_INCLUDE_COMMA);
};

const isValidLength = (userInput) => {
  if (userInput.split(TICKET.COMMA).length === NUMBER.LOTTO_LENGTH) return;

  throw new Error(ERROR.INVALID_LOTTO_LENGTH);
};

const isAllNumbers = (userInput) => {
  const userInputArray = userInput.split(TICKET.COMMA);

  userInputArray.forEach((string) => {
    isNumber(string);
  });
};

const isValidRange = (userInput) => {
  const userInputArray = userInput.split(TICKET.COMMA);
  userInputArray.forEach((inputValue) => {
    const inputNumber = Number(inputValue);
    if (inputNumber >= NUMBER.LOTTO_RANGE_MIN && inputNumber <= NUMBER.LOTTO_RANGE_MAX) return;

    throw new Error(ERROR.INVALID_LOTTO_RANGE);
  });
};

const isValidLottoNumber = (userInput) => {
  isIncludeComma(userInput);
  isValidLength(userInput);
  isAllNumbers(userInput);
  isValidRange(userInput);
};

/* Bounus Number validation */
const isValidBonusNumber = (userInput) => {
  isNumber(userInput);
  isValidRange(userInput);
};

module.exports = { isValidMoney, isValidLottoNumber, isValidBonusNumber };
