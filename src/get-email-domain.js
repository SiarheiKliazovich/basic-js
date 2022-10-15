const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
   let arr = email.split('');
   let domain = '';
   let sliced = '';
   for(let i = 0; i < arr.length; i++) {
       if(arr[i].charCodeAt(0) === 64) {
          sliced = arr.slice(i + 1);
       }
   }
   domain = sliced.join('');
   return domain;
}

module.exports = {
  getEmailDomain
};
