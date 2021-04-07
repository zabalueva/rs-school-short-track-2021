/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i <= matrix.length - 1; i++) {
    for (let j = 0; j <= matrix[i].length - 1; j++) {
      sum = matrix[i][j] + sum;
      if (arr.includes(j)) {
        sum -= matrix[i][j];
      }

      if (matrix[i][j] === 0) {
        arr.push(j);
      }
    }
  }

  return sum;
}

module.exports = getMatrixElementsSum;
