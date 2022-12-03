const { Console } = require('@woowacourse/mission-utils');
const { ticketStringParser, ticketResultParse } = require('../utils/stringParser');
const { TICKET } = require('../utils/constants');

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
    Console.print(ticketsResult);
  },
};

module.exports = OutputView;
