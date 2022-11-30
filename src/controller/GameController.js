const { Console } = require('@woowacourse/mission-utils');

class GameController {
  #model;
  #view;

  constructor(model, view) {
    this.#model = model;
    this.#view = view;
  }

  startGame() {
    this.#view.readMoneyInput(this.checkValidMoney.bind(this));
  }

  checkValidMoney(userInput) {
    Console.close();
    console.log(`input : ${userInput}`);
  }
}

module.exports = GameController;
