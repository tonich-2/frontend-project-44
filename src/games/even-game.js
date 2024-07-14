import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

export default () => {
  const gameName = 'brain-even';
  const question = () => {
    const currentQuestion = getRandomNumber(gameName);

    let correctAnswer = 'yes';
    if ((currentQuestion % 2) !== 0) {
      correctAnswer = 'no';
    }
    return [currentQuestion, correctAnswer];
  };
  runRounds(gameName, question);
};
