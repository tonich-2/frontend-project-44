import readlineSync from 'readline-sync';
import greeting from './greeting.js';

export default (gameName, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = greeting(gameName);

  const roundsCount = 3; // according to the task
  let i = 1;
  while (i <= roundsCount) {
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    let result = 'Correct!';
    if (answer === String(correctAnswer)) { /* String() needs because entered numbers
      are interpreted as strings but correctAnswer may be either a number or a string. */
      i += 1;
    } else {
      result = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`;
      i = roundsCount + 2; // To exit the loop and do not show Congratulations message.
    }
    console.log(result);
  }

  if (i === roundsCount + 1) {
    console.log(`Congratulations, ${userName}!`);
  }
};
