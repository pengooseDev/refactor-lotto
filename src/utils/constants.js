const MESSAGE = Object.freeze({
  INPUT: '구입금액을 입력해 주세요.',
});

const REGEX = Object.freeze({
  NUMBER: /^\d+$/g,
});

const NUMBER = Object.freeze({
  ZERO: 0,
  UNIT: 1000,
});

const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
  INVALID_UNIT: '[ERROR] 구매 단위는 1,000원 입니다.',
  MIN_PURCHASE: '[ERROR] 로또는 최소 하나 이상 구매해야 합니다.',
});

module.exports = { MESSAGE, REGEX, NUMBER, ERROR };
