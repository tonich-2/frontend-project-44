import readlineSync from 'readline-sync';
import greet from './greeting.js';

export default (gameName, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = greet(gameName);

  const roundsCount = 3; // according to the task
  let questionAndAnswer = [];
  let i = 1;
  while (i <= roundsCount) {
    questionAndAnswer = getQuestionAndAnswer();
    console.log(`Question: ${questionAndAnswer[0]}`);

    const userAnswer = readlineSync.question('Your answer: ');

    let result = 'Correct!';
    if (userAnswer === String(questionAndAnswer[1])) { /* String() needs because entered numbers
      are interpreted as strings but correctAnswer may be either a number or a string. */
      i += 1;
    } else {
      result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${questionAndAnswer[1]}'. Let's try again, ${userName}!`;
      i = roundsCount + 2; // To exit the loop and do not show Congratulations message.
    }
    console.log(result);
  }

  if (i === roundsCount + 1) {
    console.log(`Congratulations, ${userName}!`);
  }
};
