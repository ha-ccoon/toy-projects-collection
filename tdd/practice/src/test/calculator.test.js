const Calculator = require('../calculator.js');

// test('setNumber', () => {
//   expect(Calculator.set(4)).toBe(4);
// });

// test('setClear', () => {
//   expect(Calculator.set(4)).toBe(4);
// });

test('add', () => {
  expect(() => Calculator.add(104)).toThrow();
});
