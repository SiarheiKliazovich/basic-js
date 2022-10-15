const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// members = ['Olivia', 1111, 'Lily', 'Oscar', true, null];
function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false;
  }
  const  filtermember = members.filter((el)=>typeof(el)=== 'string');
  return filtermember.length
    ? filtermember.map(member => member.trim().substring(0, 1).toUpperCase()).sort().join('')
    : false;
}

module.exports = {
  createDreamTeam
};
