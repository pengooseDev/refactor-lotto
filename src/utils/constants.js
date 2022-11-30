const MESSAGE = Object.freeze({
  INPUT: '값을 입력해주세요.',
});

const REGEX = Object.freeze({
  NUMBER: /^\d+$/g,
});

const ERROR = Object.freeze({
  NOT_A_NUMBER: '[ERROR] 숫자가 아닌 값은 입력할 수 없습니다.',
});

module.exports = { MESSAGE, REGEX, ERROR };
