/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const temp = [];
      if (j >= 1) {
        temp.push(matrix[i][j - 1]);
        if (i + 1 < matrix.length) {
          temp.push(matrix[i + 1][j - 1]);
        }
      }
      if (i + 1 < matrix.length) {
        temp.push(matrix[i + 1][j]);
        if (j + 1 < matrix[i].length) {
          temp.push(matrix[i + 1][j + 1]);
        }
      }
      if (j + 1 < matrix[i].length) {
        temp.push(matrix[i][j + 1]);
      }
      if (i >= 1) {
        temp.push(matrix[i - 1][j]);
        if (j >= 1) {
          temp.push(matrix[i - 1][j - 1]);
        }
        if (j + 1 < matrix[i].length) {
          temp.push(matrix[i - 1][j + 1]);
        }
      }
      res.push(temp.filter((el) => el === true || el === 1).length);
    }
  }
  let index = Math.ceil(res.length / matrix.length);
  result.push(res.slice(0, index));
  while (index < res.length) {
    result.push(res.slice(index, index + index));
    index += index;
  }

  return result;
}

module.exports = minesweeper;
