const Calculator = require('../src/calculator.js');
// 각각의 테스트는 독립적이어야 한다. => beforeEach()

// describe(): 관련된 것들 끼리 묶기
describe('calculator', () => {
  let cal;
  // 각각의 생성자를 생성함으로서 독립적인 테스트 가능
  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(1);
    cal.add(2);

    expect(cal.value).toBe(3);
  });

  it('add should be throw an error if the value is greater than 100', () => {
    expect(() => {
      cal.add(101);
    }).toThrow('Value cannot be greater than 100');
  });

  it('subtracts', () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe('divides', () => {
    it('0/0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1/0 === Infinity', () => {
      cal.set(4);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4/4 === 0', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
