export default (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) { /* Why is the square root -
    see trial division algorithm. */
    if (num % i === 0) return 'no';
  }
  return num !== 1 ? 'yes' : 'no';
};
