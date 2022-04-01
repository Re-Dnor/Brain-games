import getRandomNumber from '../logic/getRandomNumber.js';
import general from '../index.js';

const rule = 'What number is missing in the progression?';

const calculator = (randomNum, randomIndex, randomStep) => {
  let flexNumber = randomNum;
  const array = [];
  for (let i = 0; i < 10; i += 1) {
    array.push(flexNumber);
    flexNumber += randomStep;
  }

  const result = array[randomIndex];
  array[randomIndex] = '..';

  const question = array.join(' ');
  const correctionAnswer = String(result);
  return [question, correctionAnswer];
};

function correctAnswer() {
  const randomNum = getRandomNumber(0, 101);
  const randomIndex = getRandomNumber(0, 10);
  const randomStep = getRandomNumber(1, 11);
  const [question, correctionAnswer] = calculator(randomNum, randomIndex, randomStep);
  return [question, correctionAnswer];
}

const startGame = () => general(rule, correctAnswer);
export default startGame;
