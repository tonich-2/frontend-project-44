import readlineSync from 'readline-sync';
import greet from './greeting.js';

export default (instruction, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = greet();
  console.log(instruction);

  const roundsCount = 3; // according to the task
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) { /* Entered numbers
      are interpreted as strings but correctAnswer may be either a number or a string. */
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return; /* The code will stop here. But if break, the code will be continue to run
      and the congratulation message will be shown anyway. */
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
