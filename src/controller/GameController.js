const { Console } = require('@woowacourse/mission-utils');

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
    isValidMoney(userInput);
  }
}

module.exports = GameController;
