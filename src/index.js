import readlineSync from 'readline-sync';
import greeting from './greeting.js';
import getRandomExpression from './randomExpression.js';
import randomNumber from './randomNumber.js';
import getProgression from './progression.js';

export default (gameName) => {
  console.log('Welcome to the Brain Games!');

  const userName = greeting(gameName);

  const roundsCount = 3; // according to the task
  let i = 1;
  while (i <= roundsCount) {
    let question;
    let randomExpressionArray;
    let progressionArray;
    switch (gameName) {
      case 'brain-even':
        question = randomNumber();
        break;
      case 'brain-calc':
        randomExpressionArray = getRandomExpression();
        question = `${randomExpressionArray[0]} ${randomExpressionArray[1]} ${randomExpressionArray[2]}`;
        break;
      case 'brain-gcd':
        randomExpressionArray = getRandomExpression();
        question = `${randomExpressionArray[0]} ${randomExpressionArray[2]}`;
        break;
      case 'brain-progression':
        progressionArray = getProgression();
        question = progressionArray[1].join(' ');
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
    // no default
        }
        break;
      case 'brain-gcd': {
        const absRandNum1 = Math.abs(randomExpressionArray[0]);
        const absRandNum2 = Math.abs(randomExpressionArray[2]);
        /* The absolute value of numbers is because these random numbers may be negative and it will
        cause wrong result (moreover, the greatest common divisor will be positive anyway). */
        let gcd;
        if (absRandNum1 < absRandNum2 && absRandNum1 !== 0) {
          gcd = absRandNum1;
        } else if (absRandNum2 !== 0) {
          gcd = absRandNum2;
        } else {
          gcd = 1; // if both of the random numbers are 0
        }
        for (gcd; gcd >= 1; gcd -= 1) {
          if (absRandNum1 % gcd === 0 && absRandNum2 % gcd === 0) {
            correctAnswer = gcd;
            break;
          }
        }
      }
        break;
      case 'brain-progression':
        correctAnswer = progressionArray[0];
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
