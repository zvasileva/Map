import ErrorRepository from '../ErrorRepository';

test.each([
  [1001, 'Первая ошибка', 'Первая ошибка'],
])('get result', (code, value, expected) => {
  const error = new ErrorRepository();
  error.add(code, value);
  const result = error.translate(code);
  expect(result).toEqual(expected);
});

test.each([
  [1001, 'Первая ошибка', 1002, 'Unknown error'],
])('get result', (code, value, wrongValue, expected) => {
  const error = new ErrorRepository();
  error.add(code, value);
  const result = error.translate(wrongValue);
  expect(result).toEqual(expected);
});
