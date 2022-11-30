const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printError(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
