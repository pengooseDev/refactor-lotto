const { Random } = require('@woowacourse/mission-utils');
const { NUMBER } = require('../utils/constants');

class Ticket {
  #tickets = [];

  getAmount(money) {
    return Number(money) / NUMBER.UNIT;
  }

  addTicket(amount) {
    while (this.#tickets.length < amount) {
      const ticket = this.createTicket();
      this.#tickets.push(ticket);
    }
  }

  createTicket() {
    return Random.pickUniqueNumbersInRange(
      NUMBER.LOTTO_RANGE_MIN,
      NUMBER.LOTTO_RANGE_MAX,
      NUMBER.LOTTO_LENGTH,
    );
  }

  getTickets() {
    return this.#tickets;
  }
}

module.exports = Ticket;
