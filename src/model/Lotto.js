const { LOTTO } = require('../utils/constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = { main: numbers, bonus: LOTTO.DEFULAT_BONUS_NUMBER };
  }

  setBonusNumber(userInput) {
    this.#numbers.bonus = userInput;
  }

  checkTicketsResult(tickets) {
    const ticketsResult = [];
    tickets.forEach((ticket) => {
      ticketsResult.push(this.matchNumbers(ticket));
    });

    return ticketsResult;
  }

  matchNumbers(ticket) {
    const ticketResult = { count: LOTTO.DEFAULT_COUNT, getBonus: LOTTO.DEFAULT_GET_BONUS };
    ticket.forEach((number) => {
      if (this.#numbers.main.includes(number)) return (ticketResult.count += LOTTO.COUNT_UNIT);
      if (this.#numbers.bonus === number) return (ticketResult.getBonus = LOTTO.GET_BONUS_TRUE);
    });

    return ticketResult;
  }
}

module.exports = Lotto;
