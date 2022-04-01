import readlineSync from 'readline-sync';

export default function general(rule, answer) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(rule);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctionAnswer] = answer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctionAnswer) {
      console.log(`'${userAnswer}' is wrong answer. Correct its should be'${correctionAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}
