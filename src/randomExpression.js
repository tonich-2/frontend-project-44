import _ from 'lodash';

const randomExpression = () => {
  const randomNumber1 = _.random(1, 99);
  const randomNumber2 = _.random(1, 99);

  const getArithmeticOperator = () => {
    const arithmeticIndex = _.random(0, 2);
    switch (arithmeticIndex) {
      case 0:
        return '+';
      case 1:
        return '-';
      case 2:
        return '*';
  // no default
    }
  };

  const randomArithmeticOperator = getArithmeticOperator();

  const randomArithmeticExrpession = [randomNumber1, randomArithmeticOperator, randomNumber2];
  return (randomArithmeticExrpession);
};

// export { randomNumber1, randomNumber2, randomArithmeticOperator };

export default randomExpression;
