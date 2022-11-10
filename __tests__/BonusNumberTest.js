const BonusNumber = require('../src/BonusNumber');

describe('보너스 번호 테스트', () => {
  test('보너스 번호가 하나의 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(Number(''));
    }).toThrow('[ERROR]');
  });

  test('보너스 번호가 하나의 숫자가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(Number('헐'));
    }).toThrow('[ERROR]');
  });

  test('보너스 번호의 범위가 1이상 45이하가 아니라면 예외가 발생한다.', () => {
    expect(() => {
      new BonusNumber(0);
    }).toThrow('[ERROR]');
  });
});