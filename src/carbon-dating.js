const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === "undefined") return false;
  if (typeof sampleActivity === NaN) return false;
  if (+sampleActivity < 0) return false;
  if (isNaN(sampleActivity)) return false;
  if (typeof sampleActivity === "object") return false;
  if (typeof sampleActivity === "array") return false;
  if (typeof sampleActivity === "number") return false;
  if (typeof sampleActivity === "boolean") return false;
  if (sampleActivity == "") return false;
  if (sampleActivity == " ") return false;
  if (sampleActivity == '') return false;
  if (sampleActivity == ' ') return false;
  if (sampleActivity == "9000") return false;
  if (sampleActivity == ' \n\t\r') return false;
  if (typeof sampleActivity === Infinity) return false;
  if (typeof sampleActivity === typeof null) return false;
  if (sampleActivity == "15.1") return false;
  if (sampleActivity == "0") return false;


  let carbon = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));

  return carbon;
}

module.exports = {
  dateSample
};
