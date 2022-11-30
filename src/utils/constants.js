const MESSAGE = Object.freeze({
  MONEY_INPUT: '구입금액을 입력해 주세요.',
  GET_WIN_NUMBER: '당첨 번호를 입력해 주세요.',
});

const REGEX = Object.freeze({
  NUMBER: /^\d+$/g,
});

const NUMBER = Object.freeze({
  ZERO: 0,
  UNIT: 1000,
  LOTTO_RANGE_MIN: 1,
  LOTTO_RANGE_MAX: 45,
  LOTTO_LENGTH: 6,
});

const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_UNIT: '[ERROR] 구매 단위는 1,000원 입니다.',
  MIN_PURCHASE: '[ERROR] 로또는 최소 하나 이상 구매해야 합니다.',
  NOT_INCLUDE_COMMA: '[ERROR] 당첨 번호는 쉼표로 구분해야 합니다.',
  INVALID_LOTTO_LENGTH: '[ERROR] 당첨 번호는 여섯자리로 구성되어야 합니다.',
  INVALID_LOTTO_RANGE: '[ERROR] 당첨 번호는 1이상 45이하의 숫자여야 합니다.',
});

const TICKET = Object.freeze({
  COMMA: ',',
  FORM: (ticket) => `[${ticket.join(', ')}]`,
  AMOUNT: (tickets) => `${tickets.length}개를 구매했습니다.`,
});

module.exports = { MESSAGE, REGEX, NUMBER, ERROR, TICKET };
