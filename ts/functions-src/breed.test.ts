const breedtest = require('./breed').handler

test('init test', () => {
  expect(breedtest()).toBe(true);
});