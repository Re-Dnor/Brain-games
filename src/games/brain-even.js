#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandom.js';

export default function brainEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let result = `Congratulations ${name}!!!`
  for (let i = 0; i < 3;) {
    const random = getRandomNumber();
    const answer = readlineSync.question(`Question: ${random}? `)

    if (random % 2 === 0 && answer === 'yes') {
      i++;
      console.log("Correct!")
    } else if (random % 2 !== 0 && answer === 'no') {
      i++;
      console.log("Correct!")
    } else if (random % 2 === 0 && answer === 'no') {
      result = `'no' is wrong answer ;(. Correct answer was 'yes'.`
      break;
    } else if (random % 2 !== 0 && answer === 'yes') {
      result = `'yes' is wrong answer ;(. Correct answer was 'no'.`
      break;
    } else {
      result = `Your answer: ${answer} not correct!`;
      break;
    }
  }
  console.log(result);

}