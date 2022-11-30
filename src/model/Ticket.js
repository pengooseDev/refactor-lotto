const { Random } = require('@woowacourse/mission-utils');

class Ticket {
  #tickets = [];

  getAmount(money) {
    return Number(money) / 1000;
  }

  createTicket() {
    Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = Ticket;
