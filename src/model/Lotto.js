class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = { main: numbers };
  }

  checkTicketsResult(tickets) {
    const ticketsResult = [];
    tickets.forEach((ticket) => {
      ticketsResult.push(this.matchNumbers(ticket));
    });
    return ticketsResult;
  }

  matchNumbers(ticket) {}
}

module.exports = Lotto;
