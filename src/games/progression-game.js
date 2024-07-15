import runRounds from '../index.js';
import getProgression from '../progression.js';

export default () => {
  const gameName = 'brain-progression';

  let progressionArray;
  let correctAnswer;
  const getQuestionAndAnswer = () => {
    progressionArray = getProgression();
    const [missingItem, progression] = progressionArray; // array destructuring (because of eslint)
    const question = progression.join(' ');

    correctAnswer = missingItem;

    return [question, correctAnswer];
  };

  runRounds(gameName, getQuestionAndAnswer);
};
