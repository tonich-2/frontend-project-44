import getUserName from './cli.js';

export default (gameName) => {
  const userName = getUserName();
  console.log('Hello, ' + userName + '!');

  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.');
      break;
  // no default
  }

  return userName; // It is for userName const in index.js
};
