import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getGcd = (randomNumber1, randomNumber2) => {
  const absRandNum1 = Math.abs(randomNumber1);
  const absRandNum2 = Math.abs(randomNumber2);
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
      break;
    }
  }
  return gcd;
};

export default () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 99);
    const randomNumber2 = getRandomNumber(1, 99);
    const question = `${randomNumber1} ${randomNumber2}`;

    const correctAnswer = getGcd(randomNumber1, randomNumber2);

    return [String(question), String(correctAnswer)];
  };

  runRounds(instruction, getQuestionAndAnswer);
};
