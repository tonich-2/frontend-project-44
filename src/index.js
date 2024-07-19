import readlineSync from 'readline-sync';
import greet from './greeting.js';

export default (gameName, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = greet(gameName);

  const roundsCount = 3; // according to the task
  let victory = true;
  for (let i = 1; i <= roundsCount; i += 1) {
    let questionAndAnswer = [];
    questionAndAnswer = getQuestionAndAnswer();
    const [question, correctAnswer] = questionAndAnswer; // array destructuring
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) { /* Entered numbers
      are interpreted as strings but correctAnswer may be either a number or a string. */
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      victory = false;
      break;
    }
  }

  if (victory) {
    console.log(`Congratulations, ${userName}!`);
  }
};
