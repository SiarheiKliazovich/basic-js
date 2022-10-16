const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const objectDomain = {}
  domains.forEach(domain => {
    const domainReverse = domain.split('.').reverse();
    let key = '';
    domainReverse.forEach(item => {
      key += '.' + item;
      Object.assign(objectDomain, {
        [key]: objectDomain[key] ? objectDomain[key] + 1 : 1,
      });
    });
  });
  return objectDomain;
}

module.exports = {
  getDNSStats
};
