import runRounds from '../index.js';
import getRandomExpression from '../randomExpression.js';

export default () => {
  const gameName = 'brain-calc';

  let randomExpressionArray;
  let correctAnswer;
  const getQuestionAndAnswer = () => {
    randomExpressionArray = getRandomExpression();
    const question = `${randomExpressionArray[0]} ${randomExpressionArray[1]} ${randomExpressionArray[2]}`;

    // because eval function is not safe
    switch (randomExpressionArray[1]) {
      case '+':
        correctAnswer = randomExpressionArray[0] + randomExpressionArray[2];
        break;
      case '-':
        correctAnswer = randomExpressionArray[0] - randomExpressionArray[2];
        break;
      case '*':
        correctAnswer = randomExpressionArray[0] * randomExpressionArray[2];
  // no default
    }

    return [question, correctAnswer];
  };

  runRounds(gameName, getQuestionAndAnswer);
};
