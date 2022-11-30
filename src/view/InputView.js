const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readMoneyInput(callback) {
    Console.readLine(MESSAGE.MONEY_INPUT, (userInput) => {
      callback(userInput);
    });
  },

  readLottoNumber(callback) {
    Console.readLine(MESSAGE.GET_WIN_NUMBER, (userInput) => {
      callback(userInput);
    });
  },

  readBonusNumber(callback) {
    Console.readLine(MESSAGE.READ_BOUNUS, (userInput) => {
      callback(userInput);
    });
  },
};

module.exports = InputView;
