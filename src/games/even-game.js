import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const gameName = 'brain-even';

  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 99);

    const isEven = ((question % 2) === 0);
    const correctAnswer = isEven ? 'yes' : 'no';

    return [String(question), String(correctAnswer)]; /* String() needs because in the index.js
    numbers entered by user are interpreted as strings but correctAnswer may be either a number
    or a string. */
  };

  runRounds(gameName, getQuestionAndAnswer);
};
