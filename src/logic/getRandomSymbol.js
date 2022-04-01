import getRandomNumber from './getRandomNumber.js';

// Вызывать с массивом
export default function getRandomSymb(array = ['+', '-', '*']) {
  const index = getRandomNumber(0, 3);
  const result = array[index];
  return result;
}
