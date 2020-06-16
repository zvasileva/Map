// TODO: write your code here
import sum from './basic';

import ErrorRepository from './ErrorRepository';

console.log('worked');

console.log(sum([1, 2]));

const error = new ErrorRepository();

error.add(1001, 'Первая ошибка');
error.add(1002, 'Вторая ошибка');
error.add(1003, 'Третья ошибка');

console.log(error.translate(1001));
console.log(error.translate(1002));
console.log(error.translate(1003));
console.log(error.translate(1004));
