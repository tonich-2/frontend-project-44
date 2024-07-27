import runRounds from '../index.js';
import getRandomNumber from '../randomNumber.js';

const getRandomExpression = () => {
  const minRandNum = 1;
  const maxRandNum = 99;
  const randomNum1 = getRandomNumber(minRandNum, maxRandNum);
  const randomNum2 = getRandomNumber(minRandNum, maxRandNum);

  const arithmeticOperators = ['+', '-', '*'];
  const minArithmeticIndex = 0;
  const maxArithmeticIndex = arithmeticOperators.length - 1;
  const arithmeticIndex = getRandomNumber(minArithmeticIndex, maxArithmeticIndex);
  const randomArithmeticOperator = arithmeticOperators[arithmeticIndex];

  return [randomNum1, randomArithmeticOperator, randomNum2];
};

// because eval function is not safe
const calculateExpression = (randomNum1, randomArithmeticOperator, randomNum2) => {
  switch (randomArithmeticOperator) {
    case '+':
      return (randomNum1 + randomNum2);
    case '-':
      return (randomNum1 - randomNum2);
    case '*':
      return (randomNum1 * randomNum2);
    default:
      throw new Error(`Unknown order state (randomArithmeticOperator): '${randomArithmeticOperator}'!`);
  }
};

export default () => {
  const instruction = 'What is the result of the expression?';

  const getQuestionAndAnswer = () => {
    const [randomNum1, randomArithmeticOperator, randomNum2] = getRandomExpression();
    const question = `${randomNum1} ${randomArithmeticOperator} ${randomNum2}`;

    const correctAnswer = calculateExpression(randomNum1, randomArithmeticOperator, randomNum2);
    return [String(question), String(correctAnswer)];
  };

  runRounds(instruction, getQuestionAndAnswer);
};
