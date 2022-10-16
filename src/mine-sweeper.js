const { NotImplementedError } = require('../extensions/index.js');

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
  const matrixMap = matrix.map(item => item.map(_ => 0));
  const width = matrix[0].length;
  const height = matrix.length;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let sum1 = 0;
        const minC = i - 1 < 1 ? 0 : i - 1;
        const maxC = i + 1 >= height ? height - 1 : i + 1;
        const minK = j - 1 < 1 ? 0 : j - 1;
        const maxK = j + 1 >= width ? width - 1 : j + 1;

        for (let n = minC; n <= maxC; n++) {
            let sum2 = 0;
            for (let m = minK; m <= maxK; m++) {
                !(n === i && m === j) ? sum2 += matrix[n][m]: null;
            }
            sum1 += sum2;
        }

        matrixMap[i][j] = sum1;
      }
    }
    return matrixMap;
}

module.exports = {
  minesweeper
};
