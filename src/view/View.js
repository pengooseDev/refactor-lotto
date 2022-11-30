class View {
  #inputView;
  #outputView;

  constructor(inputView, outputView) {
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  readMoneyInput(callback) {
    this.#inputView.readMoneyInput(callback);
  }

  readLottoNumber(callback) {
    this.#inputView.readLottoNumber(callback);
  }

  printError(error) {
    this.#outputView.printError(error);
  }

  printTickets(tickets) {
    this.#outputView.printTicketsAmount(tickets);
    this.#outputView.printTickets(tickets);
  }
}

module.exports = View;
