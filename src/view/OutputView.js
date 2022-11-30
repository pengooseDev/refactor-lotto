const { Console } = require('@woowacourse/mission-utils');
const { ticketStringParser } = require('../utils/stringParser');
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
};

module.exports = OutputView;
