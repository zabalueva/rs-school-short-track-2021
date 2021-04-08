/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  const arr = Array.from(n.toString());
  for (let i = 0; i < arr.length; i++) {
    sum = +arr[i] + sum;
  }
  if (sum.toString().length > 1) {
    return getSumOfDigits(sum);
  }
  return sum;
}

module.exports = getSumOfDigits;
