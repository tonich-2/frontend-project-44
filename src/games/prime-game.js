import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const gameName = 'brain-prime';

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(2, 50);

    const isPrime = () => {
      for (let i = 2; i <= Math.sqrt(question); i += 1) { /* Why is the square root -
        see trial division algorithm. */
        if (question % i === 0) return false;
      }
      return question !== 1;
    };

    const correctAnswer = isPrime() ? 'yes' : 'no';

    return [String(question), String(correctAnswer)];
  };

  runRounds(gameName, getQuestionAndAnswer);
};
