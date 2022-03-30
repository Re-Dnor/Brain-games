#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../getRandom.js';

export default function brainEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3;) {
    const random = getRandomNumber();
    const answer = readlineSync.question(`Question: ${random}? `)

    if (random % 2 === 0 && answer === 'yes') {
      i++;
      console.log("Correct!")
    } else if (random % 2 !== 0 && answer === 'no') {
      i++;
      console.log("Correct!")
    } else {
      i = 0;
      console.log('Nope')
    }
  }
  console.log(`Congratulations ${name}!!!`);
}