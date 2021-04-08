/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let find;
  let found = false;
  let center;

  while (found === false && first <= last) {
    center = Math.floor((first + last) / 2);
    if (array[center] === value) {
      found = true;
      find = center;
    } else if (array[center] > value) {
      last = center - 1;
    } else {
      first = center + 1;
    }
  }
  return find;
}

module.exports = findIndex;
