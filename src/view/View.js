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
}

module.exports = View;
