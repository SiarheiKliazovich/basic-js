const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( n ) {
  let x = String(n).split('').map(Number)
  return Math.max(...x.map((el,i)=>{let y = x.slice(); y.splice(i,1); 
    return Number( y.join(''))}))
}

module.exports = {
  deleteDigit
};
