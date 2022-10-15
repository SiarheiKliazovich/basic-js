const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  [',', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  const ears = [];
  const cats = matrix.map((item, index) => {
  const catEars = item.filter((el,i) => el === '^^')
  return catEars.length ? ears.push(...catEars) : ears.push(null);
})  
return ears.filter(cat => cat !== null).length
}

module.exports = {
  countCats
};
