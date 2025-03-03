const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits( n ) {
  //  if (n<10) {
  //   return 0;
  //  }
  //  else
  //   return 1 + getSumOfDigits(Number(String(n).split('').map(Number).reduce((a,b)=>(a+b)))) ;
  let numArr = n.toString().split('');
  let sum = numArr.reduce((a, b) => Number(a) + Number(b));
  return sum < 10 ? sum : getSumOfDigits(sum);
  
  }
   
module.exports = {
  getSumOfDigits
};
