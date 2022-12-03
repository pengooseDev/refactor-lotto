const { TICKET, LOTTO_RESULT } = require('./constants');

const ticketStringParser = (ticket) => {
  return TICKET.FORM(ticket);
};
const totalPriceParser = (ticketsResult, money) => {
  let totalPrice = 0;
  Object.entries(ticketsResult).forEach(
    ([_, winTicket]) => (totalPrice += winTicket.price * winTicket.amount),
  );
  const rate = (totalPrice / Number(money)) * 100;

  return LOTTO_RESULT.TOTAL_REVENUE_RATE(rate);
};

module.exports = { ticketStringParser, totalPriceParser };
