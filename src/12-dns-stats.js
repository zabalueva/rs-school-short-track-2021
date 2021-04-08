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
  const doms = {};
  const arr = [domains].slice();

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const find = arr[i][j].split('.').reverse();
      const reg = new RegExp(find[0], 'g');
      const str = arr.join('.');
      doms[`.${find[0]}`] = str.match(reg).length;

      if (find.length > 2) {
        const reg2 = new RegExp(`${find[2]}.${find[1]}.${find[0]}`, 'g');

        doms[`.${find[0]}.${find[1]}.${find[2]}`] = str.match(reg2).length;
      } else if (find.length > 1) {
        const reg3 = new RegExp(`${find[find.length - 1]}.${find[0]}`, 'g');
        doms[`.${find[0]}.${find[find.length - 1]}`] = str.match(reg3).length;
      }
    }
  }
  return doms;
}

module.exports = getDNSStats;
