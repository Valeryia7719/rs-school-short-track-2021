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
  let newMatrix = [];
  newMatrix = matrix.map((item) => [...item]);
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      newMatrix[i][j] = 0;
      if (typeof matrix[i - 1] !== 'undefined') {
        if (matrix[i - 1][j - 1] === true) {
          newMatrix[i][j]++;
        }
        if (matrix[i - 1][j] === true) {
          newMatrix[i][j]++;
        }
        if (matrix[i - 1][j + 1] === true) {
          newMatrix[i][j]++;
        }
      }
      if (matrix[i][j - 1] === true) {
        newMatrix[i][j]++;
      }
      if (matrix[i][j + 1] === true) {
        newMatrix[i][j]++;
      }
      if (typeof matrix[i + 1] !== 'undefined') {
        if (matrix[i + 1][j - 1] === true) {
          newMatrix[i][j]++;
        }
        if (matrix[i + 1][j] === true) {
          newMatrix[i][j]++;
        }
        if (matrix[i + 1][j + 1] === true) {
          newMatrix[i][j]++;
        }
      }
    }
  }
  // console.log(newMatrix);
  return newMatrix;
}
// matrix = [
// [true, false, false],
// [false, true, false],
// [false, false, false]
// ];
// minesweeper(matrix);
module.exports = minesweeper;
