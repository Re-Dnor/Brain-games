import getRandomNumber from '../logic/getRandomNumber.js';
import general from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculator = (randomNum) => {
  let result;
  const array = [];

  for (let i = 1; i <= randomNum; i += 1) {
    if (randomNum % i === 0) {
      array.push(i);
    }
  }

  if (array.length === 2) {
    result = 'yes';
  } else {
    result = 'no';
  }

  return result;
};

function correctAnswer() {
  const randomNum = getRandomNumber(0, 101);
  const question = `${randomNum}`;
  const correctionAnswer = calculator(randomNum);
  return [question, correctionAnswer];
}

const startGame = () => general(rule, correctAnswer);
export default startGame;
