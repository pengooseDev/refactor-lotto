const { isValidMoney, isValidLottoNumber, isValidBonusNumber } = require('../utils/validation');

class GameController {
  #model;
  #view;
  #money;

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
    this.#money = userInput;
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
    this.readBonusNumber();
  }

  readBonusNumber() {
    this.#view.readBonusNumber(this.checkBonusValidation.bind(this));
  }

  checkBonusValidation(userInput) {
    try {
      isValidBonusNumber(userInput);
      this.setBonusNumber(userInput);
    } catch (error) {
      this.#view.printError(error);
      this.readBonusNumber();
    }
  }

  setBonusNumber(userInput) {
    this.#model.setBonusNumber(Number(userInput));
    this.checkResult();
  }

  checkResult() {
    const tickets = this.#model.getTickets();
    const ticketsResult = this.#model.checkTicketsResult(tickets);
    this.printResult(ticketsResult);
  }

  printResult(ticketsResult) {
    this.#view.printResult(ticketsResult, this.#money);
  }
}

module.exports = GameController;
