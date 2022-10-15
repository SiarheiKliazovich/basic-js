const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {
  let Arr = [],
        obj = {};
    names.forEach(function(val){

        if(obj[val] === undefined){
            if(Arr.indexOf(val) === -1){
              Arr.push(val);  
              obj[val] = 0;
            } else {
              obj[val] = 1;
              Arr.push(val + "(" + obj[val] + ")" );
            }

        } else {
            Arr.push( val + "(" + (++obj[val]) + ")");
        }
    }); 
    return Arr;
}


module.exports = {
  renameFiles
};
