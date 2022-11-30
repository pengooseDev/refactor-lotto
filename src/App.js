const GameController = require('./controller/GameController');
const Model = require('./model/Model');
const Ticket = require('./model/Ticket');
const View = require('./view/View');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  #model = new Model(new Ticket());
  #view = new View(InputView, OutputView);
  #controller = new GameController(this.#model, this.#view);

  play() {
    this.#controller.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
