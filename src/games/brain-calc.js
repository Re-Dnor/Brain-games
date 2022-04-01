import getRandomNumber from '../logic/getRandomNumber.js';
import getRandomSymbol from '../logic/getRandomSymbol.js';
import general from '../index.js';

const rule = 'What is the result of the expression?';

const calculator = (randomSym, randomNum1, randomNum2) => {
  let variable;
  switch (randomSym) {
    case '+':
      variable = randomNum1 + randomNum2;
      break;
    case '-':
      variable = randomNum1 - randomNum2;
      break;
    case '*':
      variable = randomNum1 * randomNum2;
      break;
    default:
      break;
  }

  return String(variable);
};

function correctAnswer() {
  const randomNum1 = getRandomNumber(0, 11);
  const randomNum2 = getRandomNumber(0, 11);
  const randomSym = getRandomSymbol();
  const question = `${randomNum1} ${randomSym} ${randomNum2}`;
  const correctionAnswer = calculator(randomSym, randomNum1, randomNum2);
  return [question, correctionAnswer];
}

const startGame = () => general(rule, correctAnswer);
export default startGame;
