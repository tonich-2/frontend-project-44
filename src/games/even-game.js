import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const gameName = 'brain-even';
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(gameName);

    let correctAnswer = 'yes';
    if ((question % 2) !== 0) {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };
  runRounds(gameName, getQuestionAndAnswer);
};
