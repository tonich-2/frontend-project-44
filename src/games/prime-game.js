import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isPrime = (question) => {
  for (let i = 2; i <= Math.sqrt(question); i += 1) { /* Why is the square root -
    see trial division algorithm. */
    if (question % i === 0) return false;
  }
  return question !== 1;
};

export default () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const minRandNum = 2;
    const maxRandNum = 50;
    const question = getRandomNumber(minRandNum, maxRandNum);

    const correctAnswer = isPrime(question) ? 'yes' : 'no';

    return [String(question), String(correctAnswer)];
  };

  runRounds(instruction, getQuestionAndAnswer);
};
