import getRandomNumber from '../logic/getRandomNumber.js';
import general from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const calculator = (randomNum1, randomNum2) => {
  let smallInt;
  let bigInt;
  let result;

  if (randomNum1 > randomNum2) {
    smallInt = randomNum2;
    bigInt = randomNum1;
  } else {
    smallInt = randomNum1;
    bigInt = randomNum2;
  }

  for (let i = smallInt; i >= 1; i -= 1) {
    if (bigInt % i === 0 && smallInt % i === 0) {
      result = i;
      break;
    }
  }

  return String(result);
};

function correctAnswer() {
  const randomNum1 = getRandomNumber(0, 51);
  const randomNum2 = getRandomNumber(0, 51);
  const question = `${randomNum1}  ${randomNum2}`;
  const correctionAnswer = calculator(randomNum1, randomNum2);
  return [question, correctionAnswer];
}

const startGame = () => general(rule, correctAnswer);
export default startGame;
