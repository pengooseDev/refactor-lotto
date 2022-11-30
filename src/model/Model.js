const Lotto = require('./Lotto');

class Model {
  #ticket;

  constructor(ticket) {
    this.#ticket = ticket;
  }

  buyTickets(money) {
    const amount = this.#ticket.getAmount(money);
    this.#ticket.addTicket(amount);
  }
}

module.exports = Model;
