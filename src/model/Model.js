const Lotto = require('./Lotto');

class Model {
  #ticket;
  #Lotto;

  constructor(ticket) {
    this.#ticket = ticket;
  }

  buyTickets(money) {
    const amount = this.#ticket.getAmount(money);
    this.#ticket.addTicket(amount);
  }

  getTickets() {
    return this.#ticket.getTickets();
  }

  createLotto(userInput) {
    const lottoNumber = userInput.split(',').map((string) => Number(string));
    console.log(lottoNumber);
    this.#Lotto = new Lotto(userInput);
  }

  setBonusNumber(userInput) {
    this.#Lotto.setBonusNumber(userInput);
  }

  checkTicketsResult(tickets) {
    return this.#Lotto.checkTicketsResult(tickets);
  }
}

module.exports = Model;
