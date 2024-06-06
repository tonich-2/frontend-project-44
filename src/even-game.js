import readlineSync from 'readline-sync';
import getUserName from './cli.js';
import randomNumber from './random.js';

export default () => {
  const userName = getUserName();
  console.log('Hello, ' + userName + '!');

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  let i = 1;
  while (i <= roundsCount) {
    const random = randomNumber();
    console.log('Question: ' + random);

    let isEven = 'yes';
    if ((random % 2) !== 0) {
      isEven = 'no';
    }

    const answer = readlineSync.question('Your answer: ');

    let result = 'Correct!';
    if (answer === isEven) {
      i += 1;
    } else {
      result = `'${answer}' is wrong answer ;(. Correct answer was '${isEven}'. Let's try again, ${userName}!`;
      i = roundsCount + 2; // To exit the loop and do not show Congratulations message.
    }
    console.log(result);
  }
  if (i === roundsCount + 1) {
    console.log(`Congratulations, ${userName}!`);
  }
};
