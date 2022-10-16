const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(param = true) {
    this.isEncrypt = param;
  }
  encryptionHelper(param, message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    key = key.toUpperCase();
    let zero = 0;
    const encryption = [...message.toUpperCase()].map((c) => {
      const position = c.charCodeAt(0);
      if (position >= 65 && position < 91) {
        const l = param * (key.charCodeAt(zero++ % key.length) - 130);
        const newPosition = (position - l) % 26;
        return String.fromCharCode(newPosition + 65);
      }
      return c;
    });
    if (this.isEncrypt) return encryption.join("");
    else return encryption.reverse().join("");
  }

  encrypt(message, key) {
    return this.encryptionHelper(-1, message, key);
  }

  decrypt(message, key) {
    return this.encryptionHelper(1, message, key);
  }
}

module.exports = {
  VigenereCipheringMachine
};
