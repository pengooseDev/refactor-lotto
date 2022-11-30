const { Console } = require('@woowacourse/mission-utils');
const { isValidMoney } = require('../utils/validation');

class GameController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  startGame() {
    this.#view.readMoneyInput(this.checkMoneyValidation.bind(this));
  }

  checkMoneyValidation(userInput) {
    try {
      isValidMoney(userInput);
    } catch (error) {
      this.#view.printError(error);
    }
  }
}

module.exports = GameController;
