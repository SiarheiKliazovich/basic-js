const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!date.getMonth) {
    throw new Error('Invalid date!');
  }

  if (!date.toISOString) {
    throw new Error('Invalid date!');
  }
  
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error('Invalid date!');
  }

  if (Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  if (date.getMonth() >= 11 && date.getMonth() < 12) {    
    return 'winter';

  } else if (date.getMonth() >= 0 && date.getMonth() < 2) {
    return 'winter';
  } else if (date.getMonth() >= 2 && date.getMonth() < 5) {
    return 'spring';
  } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
    return 'summer';
  } else if (date.getMonth() >= 8 && date.getMonth() < 11) {   
    return 'fall';
  }
}

module.exports = {
  getSeason
};
