import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isEven = (question) => ((question % 2) === 0);

export default () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndAnswer = () => {
    const minRandNum = 1;
    const maxRandNum = 99;
    const question = getRandomNumber(minRandNum, maxRandNum);

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    return [String(question), String(correctAnswer)]; /* String() needs because in the index.js
    numbers entered by user are interpreted as strings but correctAnswer may be either a number
    or a string. */
  };

  runRounds(instruction, getQuestionAndAnswer);
};
