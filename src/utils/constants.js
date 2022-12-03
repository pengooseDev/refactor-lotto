const MESSAGE = Object.freeze({
  MONEY_INPUT: '구입금액을 입력해 주세요.',
  GET_WIN_NUMBER: '당첨 번호를 입력해 주세요.',
  READ_BOUNUS: '보너스 번호를 입력해 주세요.',
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

const LOTTO = Object.freeze({
  DEFAULT_COUNT: 0,
  DEFAULT_GET_BONUS: false,
  DEFULAT_BONUS_NUMBER: 0,
  COUNT_UNIT: 1,
  GET_BONUS_TRUE: true,
  GET_FIVE: 5,
  DEFAULT_SCORE: {
    3: { amount: 0, price: 5000 },
    4: { amount: 0, price: 50000 },
    5: { amount: 0, price: 1500000 },
    6: { amount: 0, price: 30000000 },
    getFiveAndBonus: { amount: 0, price: 2000000000 },
  },
  THREE: 3,
  FOUR: 4,
  FIVE: '5',
  GET_FIVE_AND_BONUS: 'getFiveAndBonus',
  SIX: '6',
});

const LOTTO_RESULT = Object.freeze({
  GET_THREE: (amount) => `3개 일치 (5,000원) - ${amount}개`,
  GET_FOUR: (amount) => `4개 일치 (50,000원) - ${amount}개`,
  GET_FIVE: (amount) => `5개 일치 (1,500,000원) - ${amount}개`,
  GET_FIVE_AND_BONUS: (amount) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${amount}개`,
  GET_SIX: (amount) => `6개 일치 (2,000,000,000원) - ${amount}개`,
});

module.exports = { MESSAGE, REGEX, NUMBER, ERROR, TICKET, LOTTO, LOTTO_RESULT };
