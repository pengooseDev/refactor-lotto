const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../utils/constants');

const InputView = {
  readMoneyInput(callback) {
    Console.readLine(MESSAGE.INPUT, (userInput) => {
      callback(userInput);
    });
  },
};

module.exports = InputView;
