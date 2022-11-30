const { TICKET } = require('./constants');

const ticketStringParser = (ticket) => {
  return TICKET.FORM(ticket);
};

module.exports = { ticketStringParser };
