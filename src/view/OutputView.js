const { Console } = require('@woowacourse/mission-utils');
const { ticketStringParser } = require('../utils/stringParser');
const { TICKET, LOTTO_RESULT, LOTTO } = require('../utils/constants');

const OutputView = {
  printError(error) {
    Console.print(error);
  },

  printTickets(tickets) {
    tickets.forEach((ticket) => {
      const stringTicket = ticketStringParser(ticket);
      Console.print(stringTicket);
    });
  },

  printTicketsAmount(tickets) {
    Console.print(TICKET.AMOUNT(tickets));
  },

  printResult(ticketsResult) {
    Console.print(LOTTO_RESULT.GET_THREE(ticketsResult[LOTTO.THREE].amount));
    Console.print(LOTTO_RESULT.GET_FOUR(ticketsResult[LOTTO.FOUR].amount));
    Console.print(LOTTO_RESULT.GET_FIVE(ticketsResult[LOTTO.FIVE].amount));
    Console.print(LOTTO_RESULT.GET_FIVE_AND_BONUS(ticketsResult[LOTTO.GET_FIVE_AND_BONUS].amount));
    Console.print(LOTTO_RESULT.GET_SIX(ticketsResult[LOTTO.SIX].amount));
  },
};

module.exports = OutputView;
