import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const gameName = 'brain-prime';

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(gameName);

    const isPrime = () => {
      for (let i = 2; i <= Math.sqrt(question); i += 1) { /* Why is the square root -
        see trial division algorithm. */
        if (question % i === 0) return 'no';
      }
      return question !== 1 ? 'yes' : 'no';
    };

    const correctAnswer = isPrime();

    return [question, correctAnswer];
  };

  runRounds(gameName, getQuestionAndAnswer);
};
