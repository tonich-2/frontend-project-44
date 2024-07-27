import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getGcd = (randomNumber1, randomNumber2) => {
  let gcd = Math.min(randomNumber1, randomNumber2);
  for (gcd; gcd >= 1; gcd -= 1) {
    if (randomNumber1 % gcd === 0 && randomNumber2 % gcd === 0) {
      return gcd;
    }
  }
  throw new Error('No GCD found.'); // If the loop ended but matched no condition.
};

export default () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndAnswer = () => {
    const minRandNum = 1;
    const maxRandNum = 99;
    const randomNumber1 = getRandomNumber(minRandNum, maxRandNum);
    const randomNumber2 = getRandomNumber(minRandNum, maxRandNum);
    const question = `${randomNumber1} ${randomNumber2}`;

    const correctAnswer = getGcd(randomNumber1, randomNumber2);

    return [String(question), String(correctAnswer)];
  };

  runRounds(instruction, getQuestionAndAnswer);
};
