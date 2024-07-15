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
      break;
    default:
      throw new Error(`Unknown gameName: '${gameName}'!`);
  }
  return _.random(minRandNum, maxRandNum);
};
