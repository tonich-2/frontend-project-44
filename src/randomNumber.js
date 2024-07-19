export default (minRandNum, maxRandNum) => {
  const random = minRandNum + Math.random() * (maxRandNum + 1 - minRandNum);
  return Math.floor(random);
};
