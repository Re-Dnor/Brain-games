import getRandomNumber from '../logic/getRandomNumber.js';
import general from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function correctAnswer() {
  const randomNum = getRandomNumber(0, 100);
  const question = `${randomNum}`;
  const correctionAnswer = isEven(randomNum) ? 'yes' : 'no';
  return [question, correctionAnswer];
}

const startGame = () => general(rule, correctAnswer);
export default startGame;
