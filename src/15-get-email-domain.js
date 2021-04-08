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
function getEmailDomain(email) {
  const arr = Array.from(email);
  const index = arr.lastIndexOf('@');
  return arr.slice(index + 1, arr.length).join('');
}

module.exports = getEmailDomain;
