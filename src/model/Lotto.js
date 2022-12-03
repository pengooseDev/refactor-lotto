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
    const ticketScore = { ...LOTTO.DEFAULT_SCORE };
    tickets.forEach((ticket) => {
      const { count, getBonus } = this.matchNumbers(ticket);
      if (getBonus && count === LOTTO.GET_FIVE)
        return (ticketScore[LOTTO.GET_FIVE_AND_BONUS] += LOTTO.COUNT_UNIT);
      return (ticketScore[count] += LOTTO.COUNT_UNIT);
    });

    return ticketScore;
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
