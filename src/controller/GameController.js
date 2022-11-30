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
    this.getMoneyInput();
  }

  getMoneyInput() {
    this.#view.readMoneyInput(this.checkMoneyValidation.bind(this));
  }

  checkMoneyValidation(userInput) {
    try {
      isValidMoney(userInput);
      this.buyLotto(userInput);
    } catch (error) {
      this.#view.printError(error);
      this.getMoneyInput();
    }
  }

  buyLotto(userInput) {
    console.log(userInput);
  }
}

module.exports = GameController;
