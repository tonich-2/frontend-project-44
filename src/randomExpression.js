import getRandomNumber from './randomNumber.js';

export default () => {
  const randomNumber1 = getRandomNumber(1, 99);
  const randomNumber2 = getRandomNumber(1, 99);

  const getArithmeticOperator = () => {
    const arithmeticOperators = ['+', '-', '*'];
    const arithmeticIndex = getRandomNumber(0, 2);
    return arithmeticOperators[arithmeticIndex];
  };

  const randomArithmeticOperator = getArithmeticOperator();

  return [randomNumber1, randomArithmeticOperator, randomNumber2];
};
