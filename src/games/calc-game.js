import runRounds from '../index.js';
import getRandomExpression from '../randomExpression.js';

export default () => {
  const gameName = 'brain-calc';

  let randomExpressionArray;
  let correctAnswer;
  const getQuestionAndAnswer = () => {
    randomExpressionArray = getRandomExpression();
    const [randomNumber1, randomArithmeticOperator, randomNumber2] = randomExpressionArray;
    const question = `${randomNumber1} ${randomArithmeticOperator} ${randomNumber2}`;

    // because eval function is not safe
    const calculateExpression = () => {
      switch (randomArithmeticOperator) {
        case '+':
          return (randomNumber1 + randomNumber2);
        case '-':
          return (randomNumber1 - randomNumber2);
        case '*':
          return (randomNumber1 * randomNumber2);
        default:
          throw new Error(`Unknown order state (randomArithmeticOperator): '${randomArithmeticOperator}'!`);
      }
    };

    correctAnswer = calculateExpression();
    return [String(question), String(correctAnswer)];
  };

  runRounds(gameName, getQuestionAndAnswer);
};
