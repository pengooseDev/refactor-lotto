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

  printError(error) {
    this.#outputView.printError(error);
  }
}

module.exports = View;
