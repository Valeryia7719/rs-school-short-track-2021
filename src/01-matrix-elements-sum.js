/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 *
 * The result should be 9
 */
//  matrix = [
//   [1, 2, 3, 4],
//       [0, 5, 0, 0],
//       [2, 0, 3, 3],
// ]
function getMatrixElementsSum(matrix) {
  const newMatrix = matrix;
  let sum = 0;
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] === 0) {
        if (i < newMatrix.length - 1) {
          newMatrix[i + 1][j] = 0;
        }
      }
      sum += newMatrix[i][j];
    }
  }
  // console.log(sum);
  return sum;
}
// getMatrixElementsSum(matrix);
module.exports = getMatrixElementsSum;
