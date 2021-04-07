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
function renameFiles(names) {
  const arr = [];
  const count = 0;
  for (let i = 0; i <= names.length - 1; i++) {
    if (!arr.includes(names[i])) {
      arr.push(names[i]);
    } else if (!arr.includes(`${names[i]}(${count + 1})`)) {
      arr.push(`${names[i]}(${count + 1})`);
    } else {
      arr.push(`${names[i]}(${count + 2})`);
    }
  }
  return arr;
}

module.exports = renameFiles;
