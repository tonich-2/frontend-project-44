import _ from 'lodash';

export default (gameName) => {
  let minRandNum;
  let maxRandNum;
  switch (gameName) {
    case 'brain-even':
      minRandNum = 1;
      maxRandNum = 99;
      break;
    case 'brain-prime':
      minRandNum = 2;
      maxRandNum = 50;
  // no default
  }
  return _.random(minRandNum, maxRandNum);
};
