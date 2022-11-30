const { isValidMoney, isValidLottoNumber } = require('../utils/validation');

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
    this.#model.buyTickets(userInput);
    const tickets = this.#model.getTickets();
    this.#view.printTickets(tickets);
    this.inputLottoNumber();
  }

  inputLottoNumber() {
    this.#view.readLottoNumber(this.checkLottoValidation.bind(this));
  }

  checkLottoValidation(userInput) {
    try {
      isValidLottoNumber(userInput);
      this.createLotto(userInput);
    } catch (error) {
      this.#view.printError(error);
      this.inputLottoNumber();
    }
  }

  createLotto(userInput) {
    this.#model.createLotto(userInput);
  }
}

module.exports = GameController;
