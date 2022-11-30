const GameController = require('./controller/GameController');
const View = require('./view/View');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #model;
  #view = new View(InputView, OutputView);
  #controller = new GameController(this.#model, this.#view);

  play() {
    this.#controller.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
