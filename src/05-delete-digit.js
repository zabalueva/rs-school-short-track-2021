/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(n.toString());
  let max = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    delete arr[i];
    if (arr.join('') > max) {
      max = arr.join('');
      arr = Array.from(n.toString());
    } else arr = Array.from(n.toString());
  }
  return +max;
}

module.exports = deleteDigit;
