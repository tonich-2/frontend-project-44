import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getProgression = (initialElement, increment, progressionLength) => {
  const progression = [initialElement];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(progression[i] + increment);
  }
  return progression;
};

export default () => {
  const instruction = 'What number is missing in the progression?';

  const getQuestionAndAnswer = () => {
    const minInitialElement = 1;
    const maxInitialElement = 50;
    const initialElement = getRandomNumber(minInitialElement, maxInitialElement);
    const minIncrement = 2;
    const maxIncrement = 9;
    const increment = getRandomNumber(minIncrement, maxIncrement);
    const minProgressionLength = 5;
    const maxProgressionLength = 10;
    const progressionLength = getRandomNumber(minProgressionLength, maxProgressionLength);
    const progressionWithMissing = getProgression(initialElement, increment, progressionLength);
    const randomProgressionItem = getRandomNumber(0, progressionLength - 1);
    const missingItem = progressionWithMissing[randomProgressionItem];
    progressionWithMissing[randomProgressionItem] = '..';
    const question = progressionWithMissing.join(' ');

    return [String(question), String(missingItem)];
  };

  runRounds(instruction, getQuestionAndAnswer);
};
