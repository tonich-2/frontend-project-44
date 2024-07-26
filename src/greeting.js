import getUserName from './cli.js';

export default () => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  return userName; // It is for userName const in index.js
};
