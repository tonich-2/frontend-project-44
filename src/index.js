import readlineSync from 'readline-sync';
import greeting from './greeting.js';
import getRandomExpression from './randomExpression.js';
import randomNumber from './randomNumber.js';

export default (gameName) => {
  console.log('Welcome to the Brain Games!');

  const userName = greeting(gameName);

  const roundsCount = 3; // according to the task
  let i = 1;
  while (i <= roundsCount) {
    let question;
    let randomExpressionArray;
    switch (gameName) {
      case 'brain-even':
        question = randomNumber();
        break;
      case 'brain-calc':
        randomExpressionArray = getRandomExpression();
        question = `${randomExpressionArray[0]} ${randomExpressionArray[1]} ${randomExpressionArray[2]}`;
        break;
      // no default
    }
    console.log('Question: ' + question);

    let correctAnswer;
    switch (gameName) {
      case 'brain-even':
        correctAnswer = 'yes';
        if ((question % 2) !== 0) {
          correctAnswer = 'no';
        }
        break;
      case 'brain-calc':
      // because eval function is not safe
        switch (randomExpressionArray[1]) {
          case '+':
            correctAnswer = randomExpressionArray[0] + randomExpressionArray[2];
            break;
          case '-':
            correctAnswer = randomExpressionArray[0] - randomExpressionArray[2];
            break;
          case '*':
            correctAnswer = randomExpressionArray[0] * randomExpressionArray[2];
            break;
    // no default
        }
        break;
// no default
    }

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
