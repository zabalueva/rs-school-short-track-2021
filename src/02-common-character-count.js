/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr = [];
  const arr1 = Array.from(s1);
  const arr2 = Array.from(s2);
  for (let i = 0; i <= Math.min(s1.length, s2.length); i++) {
    if (arr2.includes(arr1[i])) {
      arr.push(s1[i]);
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  return arr.length;
}

module.exports = getCommonCharacterCount;
