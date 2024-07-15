import runRounds from '../index.js';
import getRandomExpression from '../randomExpression.js';

export default () => {
  const gameName = 'brain-gcd';

  let randomExpressionArray;
  let correctAnswer;
  const getQuestionAndAnswer = () => {
    randomExpressionArray = getRandomExpression();
    const question = `${randomExpressionArray[0]} ${randomExpressionArray[2]}`;

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

    return [question, correctAnswer];
  };

  runRounds(gameName, getQuestionAndAnswer);
};
