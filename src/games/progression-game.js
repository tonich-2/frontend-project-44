import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProgression = (initialElement, increment, progressionLength) => {
  const progression = [initialElement];
  let i = 0;
  while (i <= progressionLength) {
    progression.push(progression[i] + increment);
    i += 1;
  }
  return progression;
};

export default () => {
  const instruction = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const initialElement = getRandomNumber(1, 50);
    const increment = getRandomNumber(2, 9);
    const progressionLength = getRandomNumber(5, 10);
    const progressionWithMissing = getProgression(initialElement, increment, progressionLength);
    const randomProgressionItem = getRandomNumber(0, progressionLength - 1);
    const missingItem = progressionWithMissing[randomProgressionItem];
    progressionWithMissing[randomProgressionItem] = '..';
    const question = progressionWithMissing.join(' ');

    const correctAnswer = missingItem;

    return [String(question), String(correctAnswer)];
  };

  runRounds(instruction, getQuestionAndAnswer);
};
