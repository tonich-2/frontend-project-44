import _ from 'lodash';

export default () => {
  const progression = [_.random(1, 50)];
  const increment = _.random(2, 9);
  let i = 0;
  const progressionLength = _.random(5, 10);
  while (i <= progressionLength) {
    progression.push(progression[i] + increment);
    i += 1;
  }

  const randomProgressionItem = _.random(0, progressionLength - 1);
  const missingItem = progression[randomProgressionItem];
  progression[randomProgressionItem] = '..';
  return [missingItem, progression];
};
